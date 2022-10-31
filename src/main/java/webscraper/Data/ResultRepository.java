package webscraper.Data;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.springframework.stereotype.Repository;
import webscraper.Models.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class ResultRepository {
    private WebDriver driver;
    private Set<Team> teams = new HashSet<>();

    public Set<Team> getTeams() {
        return teams;
    }

    public void setUpChrome(){
        driver= new ChromeDriver();
        System.setProperty("webdriver.chrome.driver", "chromedriver");
    }

    public void navToTFRRS(){
        driver.get("https://www.tfrrs.org/");
    }

    public void quit(){
        driver.quit();
    }

    public void searchConference(String conf){
        driver.findElement(By.xpath("/html/body/div[2]/div/div/div/ul[1]/li[2]/a/span")).click();
        WebElement search = driver.findElement(By.id("conference_search"));
        search.sendKeys(conf);
        search.sendKeys(Keys.RETURN);
        driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/a")).click();
    }

    public void filterResults(int num) throws InterruptedException {
        Select numResults = new Select(driver.findElement(By.name("limit")));
        numResults.selectByValue(String.valueOf(num));
//        numResults.deselectAll();
        Thread.sleep(3000);
    }

    public void filterTeams( TeamFilter teams) throws InterruptedException {
        WebElement selectTeams = driver.findElement(By.xpath("/html/body/div[3]/div/div/form/div[2]/div/div[2]/div/div[1]/div/div/button"));
        selectTeams.click();
        WebElement input = driver.findElement(By.xpath( "/html/body/div[3]/div/div/form/div[2]/div/div[2]/div/div[1]/div/div/div/div[1]/input"));
        input.click();
        for (String team : teams.getTeams()) {
            input.sendKeys(team);
            input.sendKeys(Keys.RETURN);
            input.clear();
        }
        Thread.sleep(3000);
    }

    public int getNumTeams(){
        driver.findElement(By.xpath("/html/body/div[3]/div/div/form/div[2]/div/div[2]/div/div[1]/div/div/button")).click();
        String options=driver.findElement(By.cssSelector(".dropdown-menu.inner.show")).getText();
//        System.out.println(options);
        String[] allTeamsArray = options.split("\n");
        return allTeamsArray.length;
    }

    public List<Team> getAllTeams(){
        List<Team> allTeams= new ArrayList<>();
        driver.findElement(By.xpath("/html/body/div[3]/div/div/form/div[2]/div/div[2]/div/div[1]/div/div/button")).click();
        String options=driver.findElement(By.cssSelector(".dropdown-menu.inner.show")).getText();
//        System.out.println(options);
        String[] allTeamsArray = options.split("\n");
        for(String s: allTeamsArray){
            allTeams.add(new Team(s,true));
            allTeams.add(new Team(s,false));
        }
        return allTeams;
    }

    //may add whole division functionality but for now by conference is good.
    public void selectDivision(int div) throws InterruptedException {
        driver.findElement(By.linkText("PERFORMANCE LISTS")).click();
        driver.findElement(By.linkText("OUTDOOR LISTS")).click();
        Thread.sleep(1000);
        WebElement pageContent = driver.findElement(By.className("page-content"));
        WebElement panelBody= pageContent.findElement(By.className("panel-body"));
        WebElement children= panelBody.findElement(By.xpath("./child::*"));
        WebElement children2= children.findElement(By.xpath("./child::*"));

        WebElement children3= children2.findElement(By.xpath("./child::*"));

        List<WebElement> divisions = children3.findElements(By.xpath("./child::*"));

        divisions.get(div).click();
        Thread.sleep(100);
        driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/div/div["+div+1+"]/turbo-frame/div/div/div/h3/a")).click();
        Thread.sleep(1000);
    }

    public List<Performance> findPerformances() {
//        Thread.sleep(6000);
        List<Performance> allResults = new ArrayList<>();
        List<WebElement> allEvents = driver.findElements(By.className("col-lg-12"));
        for (WebElement event : allEvents) {
//            String eventName = event.findElement(By.className("font-weight-500")).getText();
            String[] eventTitle = event.getText().split("\n");
            String eventName = eventTitle[0];

            String eventT = getString(eventName);

            eventT=getEventT(eventT);


            List<WebElement> resultRows = new ArrayList<>();
            resultRows = event.findElements(By.className("allRows"));
            int filterRank=1;
            for (WebElement row : resultRows) {
                try {
                    List<WebElement> cols = row.findElements(By.tagName("td"));
                    if(!eventT.contains("Relay")) {
                        String name = cols.get(1).getText();
                        String year = cols.get(2).getText();
                        Athlete a = new Athlete(name, year);

                        String time = cols.get(4).getText();
                        Performance p = new IndvPerformance(eventT, a, time, filterRank);
                        filterRank++;
                        allResults.add(p);

                        String teamName = cols.get(3).getText();
                        boolean teamGender = getGender(eventT);

                        Team t = findTeam(teamName, teamGender);
                        if (t == null) {
                            t = new Team(teamName, teamGender);
                            teams.add(t);
                        }
                        t.getPerformances().add(p);

                    }else{ //in case of relay
                        String teamName = cols.get(1).getText();
                        String time = cols.get(2).getText();
                        String athletes = cols.get(3).getText();
                        Performance p = new RelayPerformance(eventT, time, filterRank,athletes);
                        filterRank++;

                        boolean teamGender = getGender(eventT);
                        Team t = findTeam(teamName, teamGender);
                        if (t == null) {
                            t = new Team(teamName, teamGender);
                            teams.add(t);
                        }
                        t.getPerformances().add(p);

                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        return allResults;
    }

    private String getString(String eventName) {
        int endIndex = eventName.indexOf(")");
        String eventT;
        if (endIndex != -1) {
            eventT = eventName.substring(0, endIndex + 1);
        } else {
            eventT = eventName;
        }
        //converting to High hurdles makes gender diff esier to work with later
        return eventT;
    }




    public Meet getMeet(){
        Meet meet = new Meet();
        List<Team> mensTeams = new ArrayList<>();
        List<Team> womensTeams = new ArrayList<>();

        List<WebElement> allEvents = driver.findElements(By.className("col-lg-12"));
        for (WebElement event : allEvents) {

//            String eventName = event.findElement(By.className("font-weight-500")).getText();
            String[] eventTitle = event.getText().split("\n");
            String eventName = eventTitle[0];

            String eventT = getString(eventName);
           // System.out.println(eventT);

            eventT = getEventT(eventT);

            List<WebElement> resultRows = new ArrayList<>();
            resultRows = event.findElements(By.className("allRows"));
            int filterRank=1;
            for (WebElement row : resultRows) {
                try {
                    List<WebElement> cols = row.findElements(By.tagName("td"));
                    if(!eventT.contains("Relay")) {
                        String name = cols.get(1).getText();
                        String year = cols.get(2).getText();
                        Athlete a = new Athlete(name, year);

                        String time = cols.get(4).getText();
                        Performance p = new IndvPerformance(eventT, a, time, filterRank);
                        filterRank++;
                        String teamName = cols.get(3).getText();
                        boolean teamGender = getGender(eventT);
                        Team t;
                        if(teamGender){
                            t = findTeamFromList(teamName, teamGender, womensTeams );
                            if (t == null) {
                                t = new Team(teamName, teamGender);
                                womensTeams.add(t);
                            }
                            t.getPerformances().add(p);
                        }else{
                            t = findTeamFromList(teamName, teamGender, mensTeams );
                            if (t == null) {
                                t = new Team(teamName, teamGender);
                                mensTeams.add(t);
                            }
                            t.getPerformances().add(p);
                        }




                    }else{ //in case of relay
                        String teamName = cols.get(1).getText();
                        String time = cols.get(2).getText();
                        String athletes = cols.get(3).getText();
                        Performance p = new RelayPerformance(eventT, time, filterRank,athletes);
                        filterRank++;

                        boolean teamGender = getGender(eventT);
                        Team t;
                        if(teamGender){
                            t = findTeamFromList(teamName, teamGender, womensTeams );
                            if (t == null) {
                                t = new Team(teamName, teamGender);
                                womensTeams.add(t);
                            }
                            t.getPerformances().add(p);
                        }else{
                            t = findTeamFromList(teamName, teamGender, mensTeams );
                            if (t == null) {
                                t = new Team(teamName, teamGender);
                                mensTeams.add(t);
                            }
                            t.getPerformances().add(p);
                        }

                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        meet.setMensTeams(mensTeams);
        meet.setWomensTeams(womensTeams);
        return meet;
    }

    private String getEventT(String eventT) {
        if(eventT.contains("100 Hurdles")){
            eventT ="High Hurdles (Women)";
        }else if(eventT.contains("110 Hurdles")){
            eventT ="High Hurdles (Men)";
        }else if(eventT.contains("Steeplechase ")){
            String[] split = eventT.split("\s");
            eventT= "Steeple "+split[2];
        }
        return eventT;
    }


    //-------Helper Methods----------------
    private boolean getGender(String s){
        return s.contains("men");
    }

    private Team findTeam(String name, boolean gender){
        for (Team t: teams){
            if (t.equals(new Team(name,gender))){
                return t;
            }
        }
        return null;
    }

    private Team findTeamFromList(String name, boolean gender, List<Team> teams){
        for (Team t: teams){
            if (t.equals(new Team(name,gender))){
                return t;
            }
        }
        return null;
    }
}

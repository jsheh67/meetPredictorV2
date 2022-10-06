package webscraper;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import webscraper.Models.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;

public class Scraper {

    public static Set<Team> teams = new HashSet<>();

    public static void filter10(WebDriver driver) throws InterruptedException {
        Select numResults = new Select(driver.findElement(By.name("limit")));
        numResults.selectByValue("10");
//        numResults.deselectAll();
        Thread.sleep(3000);
    }

    public static boolean getGender(String s){
        return(s.contains("men"));
    }

    public static Team getTeam(String name, boolean gender){
       for (Team t: teams){
           if (t.equals(new Team(name,gender))){
               return t;
           }
       }
       return null;
    }

    public static List<Performance> getPerformances(WebDriver driver) {
        List<Performance> allResults = new ArrayList<>();
        List<WebElement> allEvents = driver.findElements(By.className("col-lg-12"));
        for (WebElement event : allEvents) {
//            String eventName = event.findElement(By.className("font-weight-500")).getText();
            String[] eventTitle = event.getText().split("\n");
            String eventName = eventTitle[0];
            int endIndex = eventName.indexOf(")");
            String eventT;
            if (endIndex != -1) {
                eventT = eventName.substring(0, endIndex + 1);
            } else {
                eventT = eventName;
            }
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

                        Team t = getTeam(teamName, teamGender);
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
                        Team t = getTeam(teamName, teamGender);
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


    public static void filterTeams(WebDriver driver, String[] teams) throws InterruptedException {
        WebElement selectTeams = driver.findElement(By.xpath("/html/body/div[3]/div/div/form/div[2]/div/div[2]/div/div[1]/div/div/button"));
        selectTeams.click();
        WebElement input = driver.findElement(By.xpath( "/html/body/div[3]/div/div/form/div[2]/div/div[2]/div/div[1]/div/div/div/div[1]/input"));
        input.click();
        for (String team : teams) {
            input.sendKeys(team);
            input.sendKeys(Keys.RETURN);
            input.clear();
        }
    }

    public static void selectDivision(WebDriver driver, int div) throws InterruptedException {
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

    public static void searchConference( WebDriver driver, String conference) {
        driver.findElement(By.xpath("/html/body/div[2]/div/div/div/ul[1]/li[2]/a/span")).click();
        WebElement search = driver.findElement(By.id("conference_search"));
        search.sendKeys(conference);
        search.sendKeys(Keys.RETURN);
        driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/a")).click();
    }




//



    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        System.setProperty("webdriver.chrome.driver", "chromedriver");
        java.util.logging.Logger.getLogger("org.openqa.selenium").setLevel(Level.INFO);
        driver.get("https://www.tfrrs.org/");

        searchConference(driver, "SCIAC");

//        filter10(driver);
//        Thread.sleep(6000);

        filterTeams(driver, new String[]{"Caltech","Chapman", "Occidental"});
        Thread.sleep(6000);

        List<Performance> results= getPerformances(driver);
//        for(Performance p: results){
//            System.out.println(p.toString());
//        }
        for(Team t: teams){
            System.out.println(t);

            for(Performance p: t.getPerformances()){
                System.out.println(p);
            }
        }






//        WebElement navTabs= driver.findElement(By.cssSelector(".nav-tabs-vertical.w-full"));
//        List<WebElement> links = navTabs.findElements(By.className("nav-link"));



        driver.quit();
    }
}

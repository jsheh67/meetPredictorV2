package webscraper;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;

public class Scraper {

    public static void filter10(WebDriver driver) throws InterruptedException {
        Select numResults = new Select(driver.findElement(By.name("limit")));
        numResults.selectByValue("10");
//        numResults.deselectAll();
        Thread.sleep(3000);
    }
    public static List<String> getPerformances(WebDriver driver) {

            List<String> allResults = new ArrayList<>();

            List<WebElement> allEvents = driver.findElements(By.className("col-lg-12"));
            for (WebElement event : allEvents) {
//            String eventName = event.findElement(By.className("font-weight-500")).getText();
                String[] eventTitle = event.getText().split("\n");
                String eventName = eventTitle[0];
                int endIndex = eventName.indexOf(")");
                String eventT;
                if(endIndex!=-1){
                    eventT = eventName.substring(0,endIndex+1);
                }else{
                    eventT = eventName;
                }


                List<WebElement> resultRows = new ArrayList<>();
                resultRows = event.findElements(By.className("allRows"));
                for (WebElement row : resultRows) {
                    try {
                        List<WebElement> cols = row.findElements(By.tagName("td"));
                        StringBuilder builder = new StringBuilder();
                        builder.append(cols.get(0).getText());
                        builder.append(cols.get(1).getText());
                        builder.append(cols.get(2).getText());
                        builder.append(eventT);
                        allResults.add(builder.toString());

                    } catch (Exception e) {
                    }
                }
            }
            return allResults;
    }



//



    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        System.setProperty("webdriver.chrome.driver", "chromedriver");
        java.util.logging.Logger.getLogger("org.openqa.selenium").setLevel(Level.INFO);
        driver.get("https://www.tfrrs.org/");
        driver.findElement(By.linkText("PERFORMANCE LISTS")).click();
        driver.findElement(By.linkText("OUTDOOR LISTS")).click();
        Thread.sleep(1000);
        WebElement pageContent = driver.findElement(By.className("page-content"));
        WebElement panelBody= pageContent.findElement(By.className("panel-body"));

        WebElement children= panelBody.findElement(By.xpath("./child::*"));
        System.out.println(children.getTagName());

        WebElement children2= children.findElement(By.xpath("./child::*"));

        System.out.println(children2.getTagName());

        WebElement children3= children2.findElement(By.xpath("./child::*"));

        System.out.println(children3.getTagName());

        List<WebElement> divisions = children3.findElements(By.xpath("./child::*"));
        for (WebElement w:divisions){
            System.out.println(w.getTagName()+w.getText());
        }
        divisions.get(3).click();
        Thread.sleep(100);
        driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/div/div[4]/turbo-frame/div/div/div/h3/a")).click();
        Thread.sleep(1000);

        filter10(driver);
        Thread.sleep(6000);

        List<String> results= getPerformances(driver);
        for(String s: results){
            System.out.println(s);
        }






//        WebElement navTabs= driver.findElement(By.cssSelector(".nav-tabs-vertical.w-full"));
//        List<WebElement> links = navTabs.findElements(By.className("nav-link"));



        driver.quit();
    }
}

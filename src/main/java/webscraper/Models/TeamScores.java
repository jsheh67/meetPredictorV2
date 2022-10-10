package webscraper.Models;

import java.util.HashMap;
import java.util.stream.Collectors;

public class TeamScores {

    private HashMap scoreMap= new HashMap<>();

    public HashMap getScoreMap() {
        return scoreMap;
    }

    public void setScoreMap(HashMap scoreMap) {
        this.scoreMap = scoreMap;
    }

    //    private int onePoints;
//    private int twoPoints;
//    private int fourPoints;
//    private int eighthPoints;
//    private int fifteenPoints;
//    private int fiveKPoints;
//    private int tenKPoints;
//    private int fourXOnePoints;
//    private int fourXFourPoints;
//    private int longJPoints;
//    private int tripleJPoints;
//    private int highJPoint;
//    private int shotPoints;
//    private int discPoints;
//    private int hammerPoints;
//    private int javPoints;
//    private int highHurdles;
//    private int lowHurdles;

    private int total;


    public int getTotal() {
         return (int) scoreMap.values().stream().collect(Collectors.summingInt(Integer::intValue));
    }
}

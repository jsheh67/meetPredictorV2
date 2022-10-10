package webscraper.Models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class Team {
    private String teamName;
    private Boolean womens;
    private int totalPoints=0;


    private List<Performance> Performances = new ArrayList<>();

    private HashMap scoreMap= new HashMap<>();

    public int getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(int totalPoints) {
        this.totalPoints = totalPoints;
    }

    public HashMap getScoreMap() {
        return scoreMap;
    }

    public void setScoreMap(HashMap scoreMap) {
        this.scoreMap = scoreMap;
    }

    //
//
//    public HashMap getScoreMap() {
//        List<Performance> ps = getPerformances();
//        for(Performance p: ps){
//            int score=0;
//            if(scoreMap.get(p.getEvent())!=null){
//                score=(int)scoreMap.get(p.getEvent());
//                score+=p.getPoints();
//            }
//            scoreMap.put(p.getEvent(),score );
//        }
//        return scoreMap;
//    }


    public Team(String teamName, Boolean mOrF) {
        this.teamName = teamName;
        this.womens = mOrF;
    }

//    public int getTotal() {
//        return (int) scoreMap.values().stream().collect(Collectors.summingInt(Integer::intValue));
//    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Boolean getWomens() {
        return womens;
    }

    public void setWomens(Boolean womens) {
        this.womens = womens;
    }

    public List<Performance> getPerformances() {
        return Performances;
    }

    public void setPerformances(List<Performance> Performances) {
        this.Performances = Performances;
    }

    @Override
    public String toString() {
        return "Team{" +
                "teamName='" + teamName + '\'' +
                ", mOrF=" + womens +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Team)) return false;
        Team team = (Team) o;
        return teamName.equals(team.teamName) && womens.equals(team.womens);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teamName, womens);
    }
}

package webscraper.models;

import java.util.List;

public class Team {
    private String teamName;
    private Boolean mOrF;
    private List<Performance> performances;

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Boolean getmOrF() {
        return mOrF;
    }

    public void setmOrF(Boolean mOrF) {
        this.mOrF = mOrF;
    }

    public List<Performance> getPerformances() {
        return performances;
    }

    public void setPerformances(List<Performance> performances) {
        this.performances = performances;
    }

    @Override
    public String toString() {
        return "Team{" +
                "teamName='" + teamName + '\'' +
                ", mOrF=" + mOrF +
                '}';
    }
}

package webscraper.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Team {
    private String teamName;
    private Boolean mOrF;
    private List<Performance> performances= new ArrayList<>();

    public Team(String teamName, Boolean mOrF) {
        this.teamName = teamName;
        this.mOrF = mOrF;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Team)) return false;
        Team team = (Team) o;
        return teamName.equals(team.teamName) && mOrF.equals(team.mOrF);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teamName, mOrF);
    }
}

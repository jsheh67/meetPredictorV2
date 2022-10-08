package webscraper.Models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Team {
    private String teamName;
    private Boolean womens;
    private List<Performance> Performances = new ArrayList<>();

    public Team(String teamName, Boolean mOrF) {
        this.teamName = teamName;
        this.womens = mOrF;
    }

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

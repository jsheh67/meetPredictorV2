package webscraper.Models;

import java.util.List;

public class Meet {

    private List<Team> teams;

    private boolean isDuel;

    public boolean isDuel() {
        return isDuel;
    }

    public void setDuel(boolean duel) {
        isDuel = duel;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }
}

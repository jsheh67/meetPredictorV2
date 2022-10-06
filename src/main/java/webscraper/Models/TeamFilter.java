package webscraper.Models;

import java.util.List;

public class TeamFilter {
    private List<String> teams;

    public TeamFilter(){}

    public TeamFilter(List<String> teams) {
        this.teams = teams;
    }


    public List<String> getTeams() {
        return teams;
    }

    public void setTeams(List<String> teams) {
        this.teams = teams;
    }

//    public String[] getAsArray(){
//        return (String[]) teams.toArray();
//    }
}

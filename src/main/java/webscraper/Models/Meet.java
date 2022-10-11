package webscraper.Models;

import java.util.Collections;
import java.util.List;

public class Meet {

    private List<Team> mensTeams;
    private List<Team> womensTeams;


    private boolean isDuel;

    public boolean isDuel() {
        return isDuel;
    }

    public void setDuel(boolean duel) {
        isDuel = duel;
    }

    public List<Team> getMensTeams() {
        Collections.sort(mensTeams,(Team t1,Team t2)->t1.getTotalPoints()- t2.getTotalPoints() );
        return mensTeams;
    }
    public void setMensTeams(List<Team> mensTeams) {
        this.mensTeams = mensTeams;
    }

    public List<Team> getWomensTeams() {
        return womensTeams;
    }

    public void setWomensTeams(List<Team> womensTeams) {
        Collections.sort(womensTeams,(Team t1,Team t2)->t1.getTotalPoints()- t2.getTotalPoints() );
        this.womensTeams = womensTeams;
    }


}

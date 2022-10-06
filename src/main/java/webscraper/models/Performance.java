package webscraper.models;

import java.time.LocalTime;

public class Performance {

    private String event;
    private Athlete athlete;
    private String result;

    private int rank;

    public Performance(String event, Athlete athlete, String result, int rank) {
        this.event = event;
        this.athlete = athlete;
        this.result = result;
        this.rank=rank;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Athlete getAthlete() {
        return athlete;
    }

    public void setAthlete(Athlete athlete) {
        this.athlete = athlete;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "Performance{" +
                "event='" + event + '\'' +
                ", athlete=" + athlete +
                ", result='" + result + '\'' +
                ", rank=" + rank +
                '}';
    }
}

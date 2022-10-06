package webscraper.models;

import java.time.LocalTime;

public class Performance {

    private String event;
    private Athlete athlete;
    private LocalTime time;

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

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Performance{" +
                "event='" + event + '\'' +
                ", athlete=" + athlete +
                ", time=" + time +
                '}';
    }
}

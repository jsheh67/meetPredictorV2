package webscraper.models;

import java.util.Objects;

public class Performance {
    private String event;
    private String result;
    private int rank;

    public Performance(String event, String result, int rank) {
        this.event = event;
        this.result = result;
        this.rank = rank;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "Performance{" +
                "event='" + event + '\'' +
                ", result='" + result + '\'' +
                ", rank=" + rank +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Performance)) return false;
        Performance that = (Performance) o;
        return rank == that.rank && event.equals(that.event) && result.equals(that.result);
    }

    @Override
    public int hashCode() {
        return Objects.hash(event, result, rank);
    }
}

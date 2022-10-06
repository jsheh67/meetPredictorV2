package webscraper.Models;

public class IndvPerformance  extends  Performance {
    private Athlete athlete;

    public Athlete getAthlete() {
        return athlete;
    }

    public void setAthlete(Athlete athlete) {
        this.athlete = athlete;
    }

    public IndvPerformance(String event,Athlete athlete, String time, int rank) {
        super(event, time, rank);
        this.athlete = athlete;
    }

    @Override
    public String toString() {
        return "IndvPerformance{" +
                " athlete=" + athlete +
                " result="+super.getResult()+
                " event="+super.getEvent()+
                " rank="+super.getRank()+
                '}';
    }
}



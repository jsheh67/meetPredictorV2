package webscraper.models;

public class RelayPerformance extends Performance{

    private String athletes;

    public RelayPerformance(String event, String result, int rank, String athletes) {
        super(event, result, rank);
        athletes = athletes;
    }

    public String getAthletes() {
        return athletes;
    }

    public void setAthletes(String athletes) {
        athletes = athletes;
    }

    @Override
    public String toString() {
        return "RelayPerformance{" +
                "athletes='" + athletes + '\'' +
                '}';
    }
}

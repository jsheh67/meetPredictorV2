package webscraper.Domain;

import org.springframework.stereotype.Service;
import webscraper.Data.ResultRepository;
import webscraper.Models.Performance;
import webscraper.Models.Team;

import java.util.List;
import java.util.Set;

@Service
public class ResultsService {
    private final ResultRepository repository;

    private ResultsService(ResultRepository repository){
        this.repository=repository;
    }

    public void setUpChrome(){
        repository.setUpChrome();
    }

    public void navToTFRRS(){
        repository.navToTFRRS();
    }
    public void filterResults(int n) throws InterruptedException {
        repository.filterResults(n);
    }
    public void quit(){
        repository.quit();
    }

    public void searchConference(String conf){
        repository.searchConference(conf);
    }

    public void filterTeams(String[] teams) throws InterruptedException {
        repository.filterTeams(teams);
    }

    public void selectDivision(int n) throws InterruptedException {
        repository.selectDivision(n);
    }

    public List<Performance> findPerformances(){
         return repository.findPerformances();
    }

    public List<Performance> getPerformancesWPoints(boolean isDuel){
        List<Performance> performances = findPerformances();
        return addPoints(isDuel,performances);
    }

    public List<Performance> addPoints(boolean isDuel, List<Performance> performances){
        for(Performance p: performances){
            if(isDuel){
                switch(p.getRank()){
                    case 1:
                        p.setPoints(5);
                        break;
                    case 2:
                        p.setPoints(3);
                        break;
                    case 3:
                        p.setPoints(1);
                        break;
                    default:
                        p.setPoints(0);
                        break;
                }
            }else{
                switch (p.getRank()){
                    case 1:
                        p.setPoints(10);
                        break;
                    case 2:
                        p.setPoints(8);
                        break;
                    case 3:
                        p.setPoints(6);
                        break;
                    case 4:
                        p.setPoints(5);
                        break;
                    case 5:
                        p.setPoints(4);
                        break;
                    case 6:
                        p.setPoints(3);
                        break;
                    case 7:
                        p.setPoints(2);
                        break;
                    case 8:
                        p.setPoints(1);
                        break;
                    default:
                        p.setPoints(0);
                        break;
                }
            }
        }
        return performances;
    }

    //need to run find performances first to populate teams
    //may be more efficient to find teams separately
    public Set<Team> findTeams(){
        return repository.getTeams();
    }








}

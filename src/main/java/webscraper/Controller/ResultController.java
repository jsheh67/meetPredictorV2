package webscraper.Controller;

import org.springframework.web.bind.annotation.*;
import webscraper.Domain.ResultsService;
import webscraper.Models.Meet;
import webscraper.Models.Performance;
import webscraper.Models.Team;
import webscraper.Models.TeamFilter;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class ResultController {

    private ResultsService service;

    private ResultController(ResultsService service){
        this.service=service;
    }

    private void startAndSearch(String conf){
        service.setUpChrome();
        service.navToTFRRS();
        service.searchConference(conf);
    }


    @GetMapping("/meetResultsF/{conf}")
    public Meet getMeetResults(@PathVariable String conf,  @RequestBody TeamFilter teams) throws InterruptedException {
        startAndSearch(conf);
        service.filterTeams(teams);
//        Meet m = service.getMeetWPoints();
        Meet m= service.getMeetWEventScores();
        service.quit();
        return m;
    }

    @GetMapping("/meetResults/{conf}")
    public Meet getMeetResultsWFilter(@PathVariable String conf){
        startAndSearch(conf);
        Meet m = service.getMeetWPoints();
        service.quit();
        return m;
    }

    @GetMapping("/results/{conf}")
    public List<Performance> getConfResults(@PathVariable String conf) throws InterruptedException {
        startAndSearch(conf);
        List<Performance> p =service.getPerformancesWPoints(true);
        service.quit();
        return p;
    }

    @GetMapping("/resultsF/{conf}")
    public List<Performance> getConfResultsFilterTeams(@PathVariable String conf, @RequestBody TeamFilter teams) throws InterruptedException {
        startAndSearch(conf);
        service.filterTeams(teams);
        List<Performance> p= service.getPerformancesWPoints(true);
        service.quit();
        return p;
    }

    @GetMapping("/teams/{conf}")
    public List<Team> getAllTeams(@PathVariable String conf){
        startAndSearch(conf);
        List<Team> t= service.getAllTeams();
        service.quit();
        return t;
    }





}

package webscraper.Controller;

import org.springframework.web.bind.annotation.*;
import webscraper.Domain.ResultsService;
import webscraper.Models.Performance;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class ResultController {

    private ResultsService service;

    private ResultController(ResultsService service){
        this.service=service;
    }

    @GetMapping("/results/{conf}")
    public List<Performance> getConfResults(@PathVariable String conf){
        service.setUpChrome();
        service.navToTFRRS();
        service.searchConference(conf);
        return service.getPerformancesWPoints(true);
    }

    @GetMapping("/results/{conf}")
    public List<Performance> getConfResultsFilterTeams(@PathVariable String conf, @RequestBody String[] teams) throws InterruptedException {
        service.setUpChrome();
        service.navToTFRRS();
        service.searchConference(conf);
        service.filterTeams(teams);
        return service.getPerformancesWPoints(true);
    }





}

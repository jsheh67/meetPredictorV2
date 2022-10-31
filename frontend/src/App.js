
import './App.css';
import Description from './components/Description';
import ConfSearch from './components/ConfSearch';
import TeamFilter from './components/TeamFilter';
import Header from './components/Header';
import ResultTable from './components/ResultTable';
import { useState } from "react";

function App() {

  const[meetResults, setMeetResults]=useState({});


  return (
    <div className="App" >
      <header className="App-header ">
        <Header />
        <Description />
        <ConfSearch 
          meetResults={meetResults}
          setMeetResults={setMeetResults}/>
        <TeamFilter />
        <ResultTable
          meetResults={meetResults} />
       

      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

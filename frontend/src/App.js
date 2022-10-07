
import './App.css';
import Description from './components/Description';
import ConfSearch from './components/ConfSearch';
import TeamFilter from './components/TeamFilter';
import Header from './components/Header';
import ResultTable from './components/ResultTable';

function App() {
  return (
    <div className="App" >
      <header className="App-header ">
        <Header />
        <Description />
        <ConfSearch />
        <TeamFilter />
        <ResultTable />
       

      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

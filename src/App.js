import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import tableContext from './context/tableContext';
import getPlanetList from './services/fetchPlanets';

function App() {
  const [planets, setPlanets] = useState([]);
  const [tableTitles, setTableTitles] = useState([]);

  useEffect(() => {
    const getDataFromAPI = async () => {
      const data = await getPlanetList();
      // const treatedData = data.results.forEach((planet) => delete planet.residents);
      // console.log(treatedData);
      setTableTitles(Object.keys(data.results[0]));
      setPlanets(data.results);
    };
    getDataFromAPI();
  }, []);

  const contextValue = {
    planets,
    tableTitles,
  };
  // console.log(planets);
  // console.log(tableTitles);

  return (
    <tableContext.Provider value={ contextValue }>
      <Table />
    </tableContext.Provider>
  );
}

export default App;

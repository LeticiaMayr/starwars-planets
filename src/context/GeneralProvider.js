import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from './tableContext';
import getPlanetList from '../services/fetchPlanets';

function GeneralProvider({ children }) {
  // Fetch planets from API and set the table with no filters
  const [planets, setPlanets] = useState([]);
  const [tableTitles, setTableTitles] = useState([]);

  useEffect(() => {
    const getDataFromAPI = async () => {
      const data = await getPlanetList();
      setTableTitles(Object.keys(data.results[0]));
      setPlanets(data.results);
    };
    getDataFromAPI();
  }, []);

  // Establishes the filter that searches based on planet's name
  const [nameFilter, setNameFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  // Establishes numeric filters
  const [numericFilters, setNumericFilters] = useState({
    filterByNumericValues: [],
  });

  // Função pra checar se já existe um filtro daquela coluna

  const checkFilters = (columnToBeFiltered) => {
    const { filterByNumericValues } = numericFilters;
    const columnValues = filterByNumericValues.map((fil) => fil.column);
    if (columnValues.includes(columnToBeFiltered)) {
      return true;
    }
    return false;
  };

  // I need a meme so... HELLO THERE! :D
  const contextValue = {
    planets,
    tableTitles,
    nameFilter,
    setNameFilter,
    numericFilters,
    setNumericFilters,
    checkFilters,
  };
  return (
    <tableContext.Provider value={ contextValue }>
      { children }
    </tableContext.Provider>
  );
}

GeneralProvider.propTypes = {
  children: PropTypes.arrayOf(String).isRequired,
};

export default GeneralProvider;

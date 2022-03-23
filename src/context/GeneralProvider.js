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

  // I need a meme so... HELLO THERE! :D
  const contextValue = {
    planets,
    tableTitles,
    nameFilter,
    setNameFilter,
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

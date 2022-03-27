import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from './tableContext';
import getPlanetList from '../services/fetchPlanets';

function GeneralProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableTitles, setTableTitles] = useState([]);

  // To render the filter options dinamically

  const allFilterOptions = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [filterOptions, setFilterOptions] = useState(allFilterOptions);

  // Establishes numeric filters
  const [numericFilters, setNumericFilters] = useState({
    filterByNumericValues: [],
  });

  // Component didmount

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

  // Lets go for the hard part

  const filterPlanet = (p, f) => {
    if (f.comparison === 'maior que') {
      if (Number(p[f.column]) > Number(f.value)) {
        return true;
      }
      return false;
    }
    if (f.comparison === 'menor que') {
      if (Number(p[f.column]) < Number(f.value)) {
        return true;
      }
      return false;
    }
    if (f.comparison === 'igual a') {
      if (Number(p[f.column]) === Number(f.value)) {
        return true;
      }
      return false;
    }
  };

  const filteredPlanets = planets
    .filter((planet) => numericFilters.filterByNumericValues
      .every((fi) => filterPlanet(planet, fi)));

  // I need a meme so... HELLO THERE! :D
  const contextValue = {
    planets,
    tableTitles,
    nameFilter,
    setNameFilter,
    numericFilters,
    setNumericFilters,
    filteredPlanets,
    filterOptions,
    setFilterOptions,
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

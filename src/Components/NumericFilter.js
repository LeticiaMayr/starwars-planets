import React, { useContext, useState } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const [choosenFilters, setChoosenFilters] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  );

  const { setNumericFilters, numericFilters, checkFilters } = useContext(tableContext);
  const handleClick = () => {
    if (!checkFilters(choosenFilters.column)) {
      setNumericFilters({
        filterByNumericValues: [
          ...numericFilters.filterByNumericValues,
          choosenFilters,
        ],
      });
      setChoosenFilters(choosenFilters);
    }
  };

  const handlechange = (event) => {
    setChoosenFilters({
      ...choosenFilters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handlechange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="value-filter"
        name="comparison"
        onChange={ handlechange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handlechange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
    </>
  );
}

export default NumericFilter;

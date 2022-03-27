import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const { setNumericFilters, numericFilters,
    filterOptions, setFilterOptions, choosenFilters,
    setChoosenFilters, allFilterOptions } = useContext(tableContext);
  const { filterByNumericValues } = numericFilters;

  const handleClick = () => {
    setNumericFilters({
      filterByNumericValues: [
        ...numericFilters.filterByNumericValues,
        choosenFilters,
      ],
    });
    const updatedFilters = [...filterByNumericValues, choosenFilters];
    setFilterOptions((state) => state
      .filter((o) => (!updatedFilters.some((f) => Object.values(f).includes(o)))));
    setChoosenFilters({
      ...choosenFilters,
      column: filterOptions[1],
    });
  };

  const handlechange = (event) => {
    setChoosenFilters({
      ...choosenFilters,
      [event.target.name]: event.target.value,
    });
  };

  const removeAllFilters = () => {
    setNumericFilters({
      filterByNumericValues: [],
    });
    setFilterOptions(allFilterOptions);
  };

  return (
    <>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handlechange }
      >
        {
          filterOptions.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              {option}
            </option>))
        }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handlechange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        defaultValue="0"
        type="number"
        name="value"
        onChange={ handlechange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ removeAllFilters }
      >
        Remover Filtros
      </button>
    </>
  );
}

export default NumericFilter;

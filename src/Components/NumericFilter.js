import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const [choosenFilters, setChoosenFilters] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  );

  const { setNumericFilters, numericFilters,
    filterOptions, setFilterOptions } = useContext(tableContext);

  useEffect(() => {
    console.log(filterOptions);
  }, [filterOptions]);

  const handleClick = () => {
    setNumericFilters({
      filterByNumericValues: [
        ...numericFilters.filterByNumericValues,
        choosenFilters,
      ],
    });
    setChoosenFilters(choosenFilters);
    console.log(choosenFilters);
    // const { filterByNumericValues } = numericFilters;
    setFilterOptions((state) => state.filter((o) => o !== choosenFilters.column));
    // setFilterOptions((state) => state
    //   .filter((o) => (!filterByNumericValues.some((f) => Object.values(f).includes(o)))));
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
    </>
  );
}

export default NumericFilter;

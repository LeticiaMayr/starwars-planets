import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function FilterDisplayer() {
  const { numericFilters: { filterByNumericValues },
    setNumericFilters, setFilterOptions, filterOptions } = useContext(tableContext);

  const handleClick = ({ target }) => {
    const filtersAfterRemoval = filterByNumericValues
      .filter((fil) => fil.column !== target.name);
    setNumericFilters({
      filterByNumericValues: [
        ...filtersAfterRemoval,
      ],
    });
    setFilterOptions([...filterOptions, target.name]);
  };

  return (
    <>
      <h3>Filtros Ativos</h3>
      {filterByNumericValues
        .map((filt) => (
          <p
            data-testid="filter"
            key={ filt.column }
          >
            {`${filt.column} ${filt.comparison} ${filt.value}`}
            <button
              data-testid="button-remove-filters"
              type="button"
              onClick={ handleClick }
              name={ filt.column }
            >
              X
            </button>
          </p>
        ))}
    </>
  );
}

export default FilterDisplayer;

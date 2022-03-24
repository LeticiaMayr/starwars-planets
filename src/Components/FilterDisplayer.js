import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function FilterDisplayer() {
  const { numericFilters: { filterByNumericValues },
    setNumericFilters } = useContext(tableContext);

  const handleClick = ({ target }) => {
    console.log(filterByNumericValues);
    const filtersAfterRemoval = filterByNumericValues
      .filter((fil) => fil.column !== target.name);
    setNumericFilters({
      filterByNumericValues: [
        ...filtersAfterRemoval,
      ],
    });
    console.log(filterByNumericValues);
  };

  return (
    <>
      <h3>Filtros Ativos</h3>
      {filterByNumericValues
        .map((filt) => (
          <p key={ filt.column }>
            {`${filt.column} ${filt.comparison} ${filt.value}`}
            <button
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

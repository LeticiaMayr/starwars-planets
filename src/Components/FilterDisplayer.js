import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function FilterDisplayer() {
  const { numericFilters: { filterByNumericValues } } = useContext(tableContext);

  const handleClick = () => {
    console.log('apaga-te cesamu :o');
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
            >
              X
            </button>
          </p>
        ))}
    </>
  );
}

export default FilterDisplayer;

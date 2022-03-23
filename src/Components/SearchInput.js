import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function SearchInput() {
  const { setNameFilter } = useContext(tableContext);
  const handlechange = (event) => {
    setNameFilter({
      filterByName: {
        name: event.target.value,
      },
    });
  };
  return (
    <>
      <h1>Letwars</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handlechange }
      />
    </>
  );
}

export default SearchInput;

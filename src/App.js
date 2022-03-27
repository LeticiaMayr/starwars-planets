import React from 'react';
import './App.css';
import Table from './Components/Table';
import SearchInput from './Components/SearchInput';
import GeneralProvider from './context/GeneralProvider';
import NumericFilter from './Components/NumericFilter';
import FilterDisplayer from './Components/FilterDisplayer';

function App() {
  return (
    <GeneralProvider>
      <h1>Starwars</h1>
      <SearchInput />
      <NumericFilter />
      <FilterDisplayer />
      <Table />
    </GeneralProvider>
  );
}

export default App;

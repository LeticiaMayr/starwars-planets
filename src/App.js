import React from 'react';
import './App.css';
import Table from './Components/Table';
import SearchInput from './Components/SearchInput';
import GeneralProvider from './context/GeneralProvider';
import NumericFilter from './Components/NumericFilter';

function App() {
  return (
    <GeneralProvider>
      <h1>Letwars</h1>
      <SearchInput />
      <NumericFilter />
      <Table />
    </GeneralProvider>
  );
}

export default App;

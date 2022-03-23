import React from 'react';
import './App.css';
import Table from './Components/Table';
import SearchInput from './Components/SearchInput';
import GeneralProvider from './context/GeneralProvider';

function App() {
  return (
    <GeneralProvider>
      <SearchInput />
      <Table />
    </GeneralProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Table from './component/Table';
import Search from './component/Search'

function App() {
  return (
    <div className="wrap">
      <h1>Employee Directory</h1>
      <Search></Search>
      <Table></Table>
    </div>
  );
}

export default App;

import './App.css';
import Cards from './Cards';
import React, { useState } from 'react';


function App() {
  const firstName = "";
    const [a,seta]=useState('none')
    if (firstName !== '') {
      seta('block');
    } else {
      seta('none');
    }
  return (
    <div className="App">
      <Cards/>
      <p>Hello, {firstName ? firstName : "there"}</p>
      <img src="https://via.placeholder.com/150" alt='' style={{ display: a }}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './containers/Header'
import Body from './containers/Body'

function App() {

  const handleSubmit = (year, days) => {
    fetch('http://localhost:3000/years', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({year: {year: year, pto: days}})
    })
    .then(resp => resp.json())
    .then(json => console.log(json.result))
  }

  return (
    <div className="App">
      Test
      <Header handleSubmit={handleSubmit}/>
      <Body />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Header from './containers/Header'
import Body from './containers/Body'

function App() {

  const [results, setResults] = useState([])
  console.log(results)

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
    .then(json => setResults(json.result))
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit}/>
      <Body results={results}/>
    </div>
  );
}

export default App;

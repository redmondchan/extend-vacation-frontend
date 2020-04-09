import React, {useState} from 'react';
import BootForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Form(props) {
  const[year, setYear] = useState(new Date().getFullYear())
  const[days, setDays] = useState(0)
  const options = []
  for(let i =1; i < 60; i++){
    if(i === 15){
      options.push(<option selected>{i}</option>)
    } else {
      options.push(<option>{i}</option>)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify({year: year, pto: days}))
    props.handleSubmit(year, days)
    // fetch('http://localhost:3000/years', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   },
    //   body: JSON.stringify({year: {year: year, pto: days}})
    // })
    // .then(resp => resp.json())
    // .then(json => console.log(json.result))
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

      <label> Year: </label>
        <select onChange={e => setYear(parseInt(e.target.value))}>
          <option selected>{new Date().getFullYear()}</option>
          <option>{new Date().getFullYear() + 1}</option>
          <option>{new Date().getFullYear() + 2}</option>
        </select>

      <label> # of PTO: </label>
        <select onChange={e => setDays(parseInt(e.target.value))}>
          {options}
        </select>

      <button> Submit </button>

    </form>
    <BootForm onSubmit={handleSubmit}>
      <BootForm.Group controlId="year">
        <BootForm.Label>Year:</BootForm.Label>
        <BootForm.Control as="select" custom onChange={e => setYear(parseInt(e.target.value))}>
          <option selected>{new Date().getFullYear()}</option>
          <option>{new Date().getFullYear() + 1}</option>
          <option>{new Date().getFullYear() + 2}</option>
        </BootForm.Control>
      </BootForm.Group>

      <BootForm.Group controlId="pto">
        <BootForm.Label>PTO:</BootForm.Label>
        <BootForm.Control as="select" custom onChange={e => setDays(parseInt(e.target.value))}>
          {options}
        </BootForm.Control>
      </BootForm.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </BootForm>
    </div>
  )
}

export default Form;

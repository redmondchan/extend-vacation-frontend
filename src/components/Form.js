import React, {useState} from 'react';

function Form() {
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
    console.log({year: year, days: days})
  }

  return (
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
  )
}

export default Form;

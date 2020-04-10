import React, {useState} from 'react';
import CalendarRow from './CalendarRow';

function Calendar(props) {
    // const rows = [1,2,3,4]
    // array of objects
    console.log(props)

    const date = props.date

    const numOfDays = 32 - new Date(date["year"], date["month"] - 1, 32).getDate()

    const startOfMonth = new Date(date["year"], date["month"] - 1).getDay()

    const array = []

    for(let i = 1; i <= numOfDays + startOfMonth; i++){
      if(i < startOfMonth){
        array.push(0)
      }else if (startOfMonth <= i <= (numOfDays + startOfMonth)) {
        array.push(i - startOfMonth)
      } else if (i > numOfDays) {
        array.push(0)
      }
    }

    if(array.length != 42){
      console.log(array)
      for(let i = array.length; i < 42; i++){
        array.push(0)
      }
    }

    const newArray = []
    for(let i = 0; i < array.length; i +=7){
      let tempArray = array.slice(i, i+7)
      newArray.push(tempArray)
    }

    const rows = []
    for(let i = 0; i < newArray.length; i++){
      rows.push(<CalendarRow row={newArray[i]}  vacation={props.vacation} date={props.date}/>)
    }
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <table className="calendar">
      <caption className="calendar__month">{`${monthArray[date.month-1]} ${props.date.year}`}</caption>
      <thead>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
          {console.log(startOfMonth + numOfDays, array, newArray)}
    </table>
  )
}

export default Calendar;

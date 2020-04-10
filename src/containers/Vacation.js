import React from 'react';
import Calendar from '../components/Calendar'

function Vacation(props){
  console.log("test", props)
    const duration = props.result.split(" - ")
    const start = duration[0].split("/")
    const end = duration[1].split("/")
    const startObject = {month: start[0], day: start[1], year: start[2]}
    const endObject = {month: end[0], day: end[1], year: end[2]}
    const vacation = {start: startObject, end: endObject}

    const calendars = []

    let maxLength = endObject.month

    if(startObject.year != endObject.year){
      maxLength = 12 + parseInt(endObject.month)
    }
    console.log("testtttttttt",startObject.month, maxLength)
    for(let i = startObject.month; i <= maxLength; i++){
      console.log(i)
      let newYear = parseInt(endObject.year) + 1
      if(i == startObject.month){
        calendars.push(<Calendar date = {startObject} vacation = {vacation}/>)
      } else if (i == endObject.month){
        calendars.push(<Calendar date = {endObject} vacation = {vacation}/>)
      } else if (i >= 13){
        let newMonth = i - 12
        calendars.push(<Calendar date = {{month: newMonth, day: 1, year: parseInt(startObject.year) + 1}} vacation = {vacation}/>)
      } else {
        calendars.push(<Calendar date = {{month: i, day: 1, year: startObject.year}} vacation = {vacation}/>)
      }
    }

    return (
      <div className="calendar-container">
        {console.log(calendars)}
        {calendars}
      </div>
    )
}

// {response.map(vacation => <Calendar />)}
export default Vacation;

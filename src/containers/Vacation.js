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

    if (startObject.month == endObject.month){
      return(
        <div>
          <Calendar date = {startObject} duration = {vacation}/>
        </div>
      )
    }
    return(
        <div>
          <Calendar date = {startObject} duration = {vacation}/>
          <Calendar date = {endObject} duration = {vacation}/>
        </div>
      )
}

// {response.map(vacation => <Calendar />)}
export default Vacation;

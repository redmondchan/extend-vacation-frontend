import React, {useState} from 'react';

function CalendarRow(props) {
  // for(let i = 0; i < row.length; i++){
  //
  // }
  console.log(props.vacation.start == props.date)
  const start = props.vacation.start
  const end = props.vacation.end
  const date = props.date
  const row = props.row
  // const weeks = props.row.map(day => day == 0 ? <td></td> : <td>{day}</td>)
  const weeks = []
  for(let i = 0; i < props.row.length; i++){
    console.log("count:", i)
    if(row[i] == 0){
      console.log(i, "Zero")
      weeks.push(<td></td>)
    } else if(start.month == date.month && start.month !== end.month){
      console.log(i, "one")
      if(row[i] >= start.day){
        weeks.push(<td className="highlighted">{row[i]}</td>)
      } else {
        weeks.push(<td>{row[i]}</td>)
      }
    } else if(start.month == date.month && start.month == end.month){
      console.log(i, "two", start.day, row[i], end.day)
      if( start.day <= row[i] && row[i] <= end.day ){
        weeks.push(<td className="highlighted">{row[i]}</td>)
      } else {
        weeks.push(<td>{row[i]}</td>)
      }
    } else if(end.month == date.month){
      console.log(i, "three")
      if(row[i] <= end.day){
        weeks.push(<td className="highlighted">{row[i]}</td>)
      } else {
        weeks.push(<td>{row[i]}</td>)
      }
    } else if(date.month !== start.month && date.month !== end.month){
      console.log(i, "four")
        weeks.push(<td className="highlighted">{row[i]}</td>)
    }
  }
  // const weeks = props.row.map(day => {
  //   if(day == 0){
  //      <td></td>
  //   } else if(vacation.start == date){
  //     if(day >= vacation.start.day){
  //       <td className="highlighted">{day}</td>
  //     } else {
  //       <td>{day}</td>
  //     }
  //     // day >= vacation.start.day ? <td className="highlighted">{day}</td> : <td>{day}</td>
  //   } else if(vacation.end == date){
  //     if(day <= vacation.end.day){
  //       <td className="highlighted">{day}</td>
  //     } else {
  //       <td>{day}</td>
  //     }
  //     // day <= vacation.end.day ? <td className="highlighted">{day}</td> : <td>{day}</td>
  //   }
  // })

  return (
    <tr>
      {weeks}
    </tr>
  )
}

export default CalendarRow;

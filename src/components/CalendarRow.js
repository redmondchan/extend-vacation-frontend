import React, {useState} from 'react';

function CalendarRow(props) {
  // for(let i = 0; i < row.length; i++){
  //
  // }
  const weeks = props.row.map(day => day == 0 ? <td></td> : <td>{day}</td>)
  return (
    <tr>
      {weeks}
    </tr>
  )
}

export default CalendarRow;

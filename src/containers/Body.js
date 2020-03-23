import React from 'react';
import Calendar from '../components/Calendar'

class Body extends React.Component {
  render() {
    return(
      <div className="body">
        body
        <Calendar />
      </div>
    )
  }
}

// {response.map(vacation => <Calendar />)}
export default Body;

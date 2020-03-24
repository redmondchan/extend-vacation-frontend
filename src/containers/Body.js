import React from 'react';
import Vacation from './Vacation'

class Body extends React.Component {
  render() {
    const results = ["2/1/2020 - 2/3/2020", "3/10/2020 - 4/8/2020"]
    return(
      <div className="body">
        Body
        {results.map(result => <Vacation result={result} />)}
      </div>
    )
  }
}

// {response.map(vacation => <Calendar />)}
export default Body;

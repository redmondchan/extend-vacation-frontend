import React from 'react';
import Vacation from './Vacation'

function Body() {

    const results = ["1/1/2020 - 2/3/2020", "3/10/2020 - 4/8/2020"]

    return(
      <div className="body">
        Body
        {results.map(result => <Vacation result={result} />)}
      </div>
    )
}

export default Body;

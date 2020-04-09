import React from 'react';
import Form from '../components/Form'

function Header(props) {
    return(
      <div className="header">

          <h1 className="heading text--large">Extend your vacation by planning with us!</h1>
          <Form handleSubmit={props.handleSubmit}/>

      </div>
    )
}

export default Header;

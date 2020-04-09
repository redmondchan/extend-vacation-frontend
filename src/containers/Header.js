import React from 'react';
import Form from '../components/Form'

function Header(props) {
    return(
      <div className="header">

          <h1>Extend your vacation by planning with us!</h1>
          <Form handleSubmit={props.handleSubmit}/>
          
      </div>
    )
}

export default Header;

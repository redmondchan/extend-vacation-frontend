import React from 'react';
import Form from '../components/Form'

function Header(props) {
    return(
      <div className="header">
        Header
        <Form handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default Header;

import React from 'react';
import Message from './Message';

const Log = (props) => {

  return (
    <section>
      <h3>{props.sender}</h3>
      <p>{props.body} <p>
      <p>{props.timestamp} </p>
    </section>
  );
};


export default Log;
import React from 'react';

const Message = (props) => {

  return (
    <section>
      <h3>{props.sender}</h3>
      <p>{props.body} <p>
      <p>{props.timestamp} </p>
    </section>
  );
};


export default Message;
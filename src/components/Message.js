import React from 'react';

const Message = (props) => {

  // let sender = 'student-socket';
  // if (props.classRoom === 'port') {
  //   classToUse = 'student-port'
  // } */}

  return (
    <section>
      <h3>{props.sender}</h3>
      <p>{props.body} <p>
      <Timestamp
          time={props.timestamp}
        />
    </section>
  );
};


export default Message;

{/* 
Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  classRoom: PropTypes.string
}

Student.defaultProps = {
  fullName: 'Anon',
  email: 'no email on file',
}

let classToUse = 'student-socket';
  if (props.classRoom === 'port') {
    classToUse = 'student-port'
  } */}
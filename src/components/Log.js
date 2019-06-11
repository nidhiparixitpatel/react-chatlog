import React from 'react';
import Message from './Message';



const generateMessageComponents = (messages) => {
  return messages.map((message) => {
    const {sender, body, timestamp} = message;
    return (<Message
      sender={sender}
      body={body}
      timestamp={timestamp}
      />)
  })
};

const Log = (props) => {
  const messageComponents = generateMessageComponents(props.props);
  return (
    <div className="">
      {messageComponents}
    </div>
  );
};

export default Log;



{/* const generateStudentComponents = (students) => {
  return students.map((student) => {
    const { fullName, email, classRoom } = student;
    return (<Student
      key={fullName}
      fullName={fullName}
      email={email}
      classRoom={classRoom}
    />);
  });
};

const StudentCollection = (props) => {
  console.log(props);
  const { students, num } = props;
  console.log(num);

  const studentComponents = generateStudentComponents(students);

  return (
    <div className="student-collection">Students
      {studentComponents}
    </div>

  );
}

export default StudentCollection; */}
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
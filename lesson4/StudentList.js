import React from 'react';

// StudentCard component to render each student's information
function StudentCard({ name, rollNumber, grade }) {
  return (
    <div className="student-card">
      <h2>Name: {name}</h2>
      <p>Roll Number: {rollNumber}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

// StudentList component to render the list of student cards
function StudentList() {
  const students = [
    { name: 'Alice', rollNumber: '001', grade: 'A' },
    { name: 'Bob', rollNumber: '002', grade: 'B' },
    { name: 'Charlie', rollNumber: '003', grade: 'C' },
    { name: 'David', rollNumber: '004', grade: 'B' },
  ];

  return (
    <div className="StudentList">
      <h1>Student Information</h1>
      <div className="student-list">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollNumber={student.rollNumber}
            grade={student.grade}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;

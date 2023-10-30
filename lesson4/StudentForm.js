import React, { useRef, useState, useEffect } from 'react';

function StudentForm({ onAddStudent }) {
  const nameRef = useRef(null);
  const rollNumberRef = useRef(null);
  const gradeRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus(); // Automatically focus the first input field on component mount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const rollNumber = rollNumberRef.current.value;
    const grade = gradeRef.current.value;

    if (name && rollNumber && grade) {
      const newStudent = {
        name,
        rollNumber,
        grade,
      };

      onAddStudent(newStudent);

      // Clear input fields
      nameRef.current.value = '';
      rollNumberRef.current.value = '';
      gradeRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>Enter Student Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} required />
        </label>
        <label>
          Roll Number:
          <input type="text" ref={rollNumberRef} required />
        </label>
        <label>
          Grade:
          <input type="text" ref={gradeRef} required />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Name: {student.name}, Roll Number: {student.rollNumber}, Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <h1>Student Information</h1>
      <StudentForm onAddStudent={handleAddStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;

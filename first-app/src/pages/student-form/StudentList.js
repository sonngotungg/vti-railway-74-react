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

export default StudentList
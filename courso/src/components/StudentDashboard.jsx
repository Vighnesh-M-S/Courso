import React, { useState } from 'react';
import { fetchCourses } from '../data/sampleCourses';

const StudentDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const students = ['Alice Johnson', 'Bob Smith', 'Charlie Brown']; // Example list of students

  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const getEnrolledCourses = () => {
    // Filter enrolled courses based on the selected student
    const enrolledCourses = fetchCourses.filter(course =>
      course.students.some(student => student.name === selectedStudent)
    );
    return enrolledCourses;
  };

  const enrolledCourses = selectedStudent ? getEnrolledCourses() : [];

  return (
    <div>
      <h2>Student Dashboard</h2>
      {selectedStudent && (
        <div>
          <p>Hello, {selectedStudent}!</p>
          <p>Your enrolled courses:</p>
          <ul>
            {enrolledCourses.map(course => (
              <li key={course.id}>{course.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label htmlFor="studentSelect">Select Student:</label>
        <select id="studentSelect" value={selectedStudent} onChange={handleStudentChange}>
          <option value="">Select a student</option>
          {students.map((student, index) => (
            <option key={index} value={student}>{student}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StudentDashboard;

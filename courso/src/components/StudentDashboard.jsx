import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../data/sampleCourses'; // Import fetchCourse function
// import courseModel from '../data/sampleCourses'; // Assuming courseModel is imported
import './StudentDashboard.css';
const StudentDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [courses, setCourses] = useState([]);
  const students = ['Alice Johnson', 'Bob Smith', 'Charlie Brown']; // Example list of students

  useEffect(() => {
    // Fetch all courses initially
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    // Fetch all courses
    // Here, you would use fetchCourse or any other method to fetch course data
    const allCourses = await fetchCourses();
    setCourses(allCourses);
  };

  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const getEnrolledCourses = () => {
    // Filter enrolled courses based on the selected student
    const enrolledCourses = courses.filter(course =>
      course.students && course.students.some(student => student.name === selectedStudent)
    );
    return enrolledCourses;
  };

  const enrolledCourses = selectedStudent ? getEnrolledCourses() : [];

  return (
    <div className="student-dashboard-container">
    <div className="selection-block">
      <label htmlFor="studentSelect">Select Student:</label>
      <select id="studentSelect" value={selectedStudent} onChange={handleStudentChange}>
        <option value="">Select a student</option>
        {students.map((student, index) => (
          <option key={index} value={student}>{student}</option>
        ))}
      </select>
    </div>
    <div className="dashboard-content">
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
    </div>
  </div>
);
};

export default StudentDashboard;

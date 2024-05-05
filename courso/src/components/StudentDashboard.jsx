import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="enrolled-courses">
              {enrolledCourses.map(course => (
                <div key={course.id} className="course-item">
                  <img src={course.thumbnail} alt={course.name} />
                  <div>
                    <h3>{course.name}</h3>
                    <p>Instructor: {course.instructor}</p>
                    {/* Add due date and progress bar */}
                    <p>Due Date: {course.dueDate}</p>
                    <progress value={course.progress} max="100">{course.progress}%</progress>
                    <Link to={`/course/${course.id}`}>View Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;

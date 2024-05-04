import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../data/sampleCourses';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const getEnrolledCourses = async () => {
      const courses = await fetchCourses();
      // Assume enrolled courses are the first three courses in the list for demonstration
      setEnrolledCourses(courses.slice(0, 3)); // Adjust as needed
    };

    getEnrolledCourses();
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <h3>Enrolled Courses:</h3>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;

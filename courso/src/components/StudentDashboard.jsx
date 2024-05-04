import React from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <div>{course.name}</div>
            <div>{course.instructor}</div>
            {/* Add other course details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;

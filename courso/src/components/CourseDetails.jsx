import React from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div>
      <h2>Course Details</h2>
      <div>Name: {course.name}</div>
      <div>Instructor: {course.instructor}</div>
      {/* Add other course details */}
    </div>
  );
};

export default CourseDetails;

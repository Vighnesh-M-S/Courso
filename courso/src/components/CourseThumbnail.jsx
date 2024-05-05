// CourseThumbnail.jsx
import React from 'react';
import './StudentDashboard.css';


const CourseThumbnail = ({ imageUrl }) => {
  return (
    <div className="course-thumbnail">
      <img src={imageUrl} alt="Course Thumbnail" />
    </div>
  );
};

export default CourseThumbnail;

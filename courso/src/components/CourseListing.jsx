import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../data/sampleCourses';
import './CourseListing.css';
const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    getCourses();
  }, []);

  return (
    <div className="course-listing-container">
      <h2>Course Listing</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="course-item">
            {/* Wrap the course name in a Link component */}
            <Link to={`/course/${course.id}`} className="course-name">{course.name}</Link>
            <div className="instructor">{course.instructor}</div>
            {/* Add other course details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;

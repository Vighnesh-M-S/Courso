import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { fetchCourses } from '../data/sampleCourses';

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
    <div>
      <h2>Course Listing</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
            <div>{course.instructor}</div>
            {/* Add other course details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;

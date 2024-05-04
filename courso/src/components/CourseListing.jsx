import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../data/sampleCourses';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses(); // Implement fetchCourses function
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
            <div>{course.name}</div>
            <div>{course.instructor}</div>
            {/* Add other course details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;

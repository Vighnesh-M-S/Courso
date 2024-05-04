import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { fetchCourses } from '../data/sampleCourses';

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courses = await fetchCourses();
      const selectedCourse = courses.find(course => course.id === parseInt(id));
      setCourse(selectedCourse);
    };

    fetchCourseDetails();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

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

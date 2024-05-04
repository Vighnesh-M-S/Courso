import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { fetchCourses } from '../data/sampleCourses';
import './CourseDetails.css'
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
    <div className="course-details-container">
      <h2>Course Details</h2>
      <div className="course-details">
      <div className="instructor">Instructor: {course.instructor}</div>
      <div className="description">Description: {course.description}</div>
      <div className="enrollment-status">Enrollment Status: {course.enrollmentStatus}</div>
      <div className="duration">Duration: {course.duration}</div>
      <div className="schedule">Schedule: {course.schedule}</div>
      <div className="location">Location: {course.location}</div>
      <div className="prerequisites">
      Prerequisites:
          <ul>
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
        <div className="syllabus">
          Syllabus:
          <ul>
            {course.syllabus.map(item => (
              <li key={item.week} className="syllabus-item">
                <span className="week">Week {item.week}:</span> {item.topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

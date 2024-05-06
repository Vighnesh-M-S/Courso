import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../data/sampleCourses'; // Import fetchCourses function
import './CourseListing.css'; // Import the CSS file

const CourseListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);

  // Function to fetch all courses
  const fetchAllCourses = async () => {
    try {
      const allCourses = await fetchCourses(); // Fetch courses using fetchCourses function
      setCourses(allCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Handle the error gracefully
    }
  };

  // Load all courses on initial render
  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Function to handle search based on course name and instructor
  useEffect(() => {
    const filtered = courses.filter(course => {
      return (
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  // Handler for search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Course Listing</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by course name or instructor"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="course-list">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-item">
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <Link to={`/course/${course.id}`}>View Details</Link>
            <div className="likes">
              <p>Likes: {course.likes}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
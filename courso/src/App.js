import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<CourseListing/>} />
          <Route path="/course/:id" element={<CourseDetails/>} />
          <Route path="/dashboard" element={<StudentDashboard/>} />
          <Route path="/course/:id" element={<CourseDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

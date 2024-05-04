import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
          <Route path="/" exact component={CourseListing} />
          <Route path="/course/:id" component={CourseDetails} />
          <Route path="/dashboard" component={StudentDashboard} />
        
      </div>
    </Router>
  );
};

export default App;

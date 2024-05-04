import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={CourseListing} />
          <Route path="/course/:id" component={CourseDetails} />
          <Route path="/dashboard" component={StudentDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

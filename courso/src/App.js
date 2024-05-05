import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the Redux store
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './data/fireBase';

const App = () => {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    // Additional initialization code if needed
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={CourseListing} />
            <Route path="/course/:id" component={CourseDetails} />
            <Route path="/dashboard" component={StudentDashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

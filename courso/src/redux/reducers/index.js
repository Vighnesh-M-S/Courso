// reducers/index.js
import { combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Import your course reducer

const rootReducer = combineReducers({
  course: courseReducer,
  // Add more reducers as needed
});

export default rootReducer;

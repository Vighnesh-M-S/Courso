import { combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Import your course reducer

const rootReducer = combineReducers({
  course: courseReducer,

});

export default rootReducer;

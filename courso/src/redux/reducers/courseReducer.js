// reducers/courseReducer.js
const initialState = {
    courses: [],
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        return {
          ...state,
          courses: action.payload,
        };
      // Add more cases as needed
      default:
        return state;
    }
  };
  
  export default courseReducer;
  
import axios from "axios";


// Register a new User
export const registerUser = (user) => {
    return dispatch => {
        
      dispatch({ type: "POST_USER_START" });  // <- This is points to the reducers // loader spinner
      axios
        .post('https://wmpbackend.herokuapp.com/api/auth/register', user.credentials)
        .then(response => {
          console.log('this is the response from Registration Post: ', response);
          dispatch({type: 'POST_USER_SUCCESS', payload: response.data})    // <- dispatching action - Sign up success
        })
        .catch(err => {
          console.log(err);
          dispatch({type: 'POST_FAIL'})  //  <- You aint gitten nothing 
        });
    };
  };



// action is being used in code and then getting EATEN by the reducer 
// the action goes in the component - the component goes in the reducer 
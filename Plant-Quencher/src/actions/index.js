import axios from "axios";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

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

// //////////////////////////////////////////////////////////////////

// ------------------------ Users Garden info received by back end
// export const getUserGarden = () =>{  // do I need an ID? ask Gerard..
//     return dispatch => {
//         dispatch({type: 'START'})
//         axiosWithAuth()
//         .get(`api/users/plants`)  // <- plants is back BackEnd garden array
//         .then(response => {
//             console.log({type: 'GET_USER_POSTS_SUCCESS', payload: response.data})
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch({type: 'POST_FAIL'})
//         });
//     }
// }
//-----------------------------------------------------------

// //////////////////////////////////////////////////////////////////

//  reference used for Garden and getUserGarden
// // Get all of the posts available

// export const getGarden = () => {
//   return dispatch => {
//     dispatch({type: 'START'})
//     axiosWithAuth()
//       .get('api/posts')
//       .then(response => {
//         console.log('Inside posts', response)
//         dispatch({type: 'GET_POSTS_SUCCESS', payload: response.data})
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch({type: 'POST_FAIL'})
//       });
//   }
// }

// // Get a specific user's posts

// export const getUserPosts = (id) => {
//   return dispatch => {
//     dispatch({type: 'START'})
//     axiosWithAuth()
//       .get(`api/posts/${id}/user`)
//       .then(response => {
//         console.log('Inside user posts', response)
//         dispatch({type: 'GET_USER_POSTS_SUCCESS', payload: response.data})
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch({type: 'POST_FAIL'})
//       });
//   }
// }

// //////////////////// AddPlant


// Adding a post

// export const addPlant = (post) => {
//     return dispatch => {
//       dispatch({type: 'START'})
//       axiosWithAuth()
//         .post('api/dash', post)
//         .then(response => {
//           console.log('this is the response from Post Post: ', response);
//           dispatch({type: 'POST_POST_SUCCESS', payload: post})
//         })
//         .catch(err => {
//           console.log(err);
//           dispatch({type: 'POST_FAIL'})
//         });
//     }
//   }
  



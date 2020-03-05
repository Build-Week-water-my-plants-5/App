// Initial State for Redux
const initialState = {
    isLoading: false,
    activity: null,
    error: null,
    posts: null,
    subreddit: null,
    user: {
      username: '',
      password: '',
      phone: '',
      email: '',
      garden: '',
    }
  };
  



// Reducer for all of the actions

export const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case "START":
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case 'POST_FAIL':
            return {
                  ...state,
                  isLoading: false,
                  error: null,
                };
        case 'POST_USER_SUCCESS':
            console.log('inside reducer: ', action.payload)
            if(action.payload) {
            return {
                ...state,
                isLoading: false,
                error: null,
            }
    } else {
        return {
            ...state,
            error: "Registration fail! Try again?",
            isLoading: false,
        }
    };



    default: return state;

    }}






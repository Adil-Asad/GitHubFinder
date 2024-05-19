import { createContext, useReducer } from 'react';
import gitHubReducer from './GitHubReducer';
//here I created the context so we don't have to create prop drill the whole code

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //instead of useState we use IntialState for our intial value like useState
  const intialState = {
    users: [],
    loading: false,
  };

  //now we destructure the useReducer to ascess its intital state and reducer function
  const [state, dispatch] = useReducer(gitHubReducer, intialState);

  //get initial users. (only testing purpose)
  const fetchUser = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    // yahan ham ny data send kiya he ta k jahan zrorat ho call kiya ja sky
    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };
  //set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  return (
    <GithubContext.Provider
      value={{
        // yahan ab state ki current vale receive kr k pory github Provier ko di ja rahi he to access it globally
        users: state.users,
        loading: state.loading,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

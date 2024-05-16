import { createContext, useState } from 'react';

//here I created the context so we don't have to create prop drill the whole code

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUser = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

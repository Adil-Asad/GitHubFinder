import { useContext } from 'react';
import Spinner from '../layout/Spinner.jsx';
import UserItem from './UserItem.jsx';
import GithubContext from '../../context/github/GithubCuntex.jsx';

function UserResults() {
  //this line is added insted of useState GithubContext is imported and used in useContext hook
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

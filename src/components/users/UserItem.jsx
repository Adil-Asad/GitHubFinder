import { Link } from 'react-router-dom';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card-side shadow-md compact bg-base-100'>
      <div className='flex item-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow-sm w-14 h-14'>
              <img src={avatar_url} alt='profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;

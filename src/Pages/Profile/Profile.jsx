import {
  Button,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className='mx-auto justify-center items-center flex'>
      <div className='w-96 bg-white shadow-lg rounded-md dark:bg-gray-800 mx-auto mt-10 '>
        <img
          alt='profile'
          src='https://images.unsplash.com/photo-1702923828891-05493a94c2ce?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full mb-4 rounded-t-md'
        />

        <div className='flex flex-col items-center justify-center p-4 -mt-20'>
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'
          />

          <p className='text-xl mt-2 font-bold underline'>User Ino.</p>
          <p className='my-2 text-xl font-medium text-gray-800 dark:text-white capitalize'>
            Name :&nbsp;{user?.displayName}
          </p>
          <p className='flex items-center text-sm text-gray-600'>
            Email:&nbsp;{user?.email}
          </p>
          <div className='flex items-center justify-between w-full gap-4 my-4'>
            <Button
              onClick={handelSignOut}
              className='mx-auto bg-[#03b97c] rounded-sm'
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

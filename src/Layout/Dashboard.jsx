import { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { MdDashboardCustomize } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import { BsHouseCheck } from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Dashboard = () => {
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
    <div className='min-h-screen grid md:grid-cols-3 mt-10'>
      {/* sidebar left */}
      <div className='md:col-span-1'>
        <div className='flex items-center p-2 space-x-4 mx-auto justify-center '>
          <img
            src={user?.photoURL}
            className='w-14 h-14 rounded-full dark:bg-gray-500'
          />
          <div>
            <h2 className='text-2xl font-semibold capitalize'>
              {user?.displayName}
            </h2>
            <span className='flex items-center space-x-1 mt-2'>
              <Link
                className=' hover:underline text-xl capitalize'
                to='/profile'
              >
                View profile
              </Link>
            </span>
          </div>
        </div>

        <div className='divide-y dark:divide-gray-700 mt-2 text-center mx-auto justify-center grid'>
          <ul className='pt-2 pb-4 space-y-1 text-sm'>
            <li className='dark:bg-gray-800 dark:text-gray-50'>
              <NavLink className='flex items-center p-1 gap-3 rounded-md text-2xl '>
                <MdDashboardCustomize />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to='addTask'
                className='flex gap-3 items-center p-1 rounded-md text-2xl  '
              >
                <FiPlusCircle />
                Add Task
              </NavLink>
            </li>
          </ul>
          <ul className='pt-4 pb-2 space-y-1 text-sm'>
            <li>
              <NavLink
                to='/'
                className='flex gap-3 items-center p-1 rounded-md text-2xl'
              >
                <BsHouseCheck />
                Home
              </NavLink>
            </li>
            <li>
              <button
                onClick={handelSignOut}
                className='flex gap-3 items-center  rounded-md'
              >
                <RiLogoutCircleLine size={25} className='ml-.1' />
                <span className='text-2xl'>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* sidebar right */}
      <div className='md:col-span-2 border'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

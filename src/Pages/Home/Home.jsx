import React, { useContext } from 'react';
import banner from '../../assets/Design_tools.gif';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='grid md:grid-cols-2 justify-center rounded items-center md:mt-40  mx-auto'>
      <div className='col-span-1 order-2 md:order-1'>
        <h1 className='text-3xl font-bold md:mt-0 mt-10 mb-5 text-center md:text-left'>
          Optimal Approach to
          <br />
          <p className='my-2'></p>
          Organize Your Daily Activities
        </h1>
        <p className='my-2 text-gray-800 text-center md:text-left'>
          Effectively structure and prioritize your everyday activities using
          our user-friendly task organization platform. This guarantees
          heightened efficiency and seamless scheduling for a well-balanced and
          stress-free daily plan.
        </p>
        {user ? (
          <Link to={'/dashboard'}>
            <button className='text-xl bg-[#03b97c] mt-3 px-4 py-3 rounded-sm text-white font-bold justify-center grid mx-auto md:mx-0'>
              Let’s Explore
            </button>
          </Link>
        ) : (
          <Link to={'/login'}>
            <button className='text-xl bg-[#03b97c] mt-3 px-4 py-3 rounded-sm text-white font-bold justify-center grid mx-auto md:mx-0'>
              Let’s Explore
            </button>
          </Link>
        )}
      </div>
      <div className='col-span-1 order-1 mt-10 md:mt-0'>
        <img className='w-full h-full' src={banner} alt='' />
      </div>
    </div>
  );
};

export default Home;

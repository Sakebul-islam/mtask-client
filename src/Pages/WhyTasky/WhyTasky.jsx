import React from 'react';

import { SiCodersrank } from 'react-icons/si';
import { CiBank } from 'react-icons/ci';

const WhyTasky = () => {
  return (
    <div className='mt-10'>
      <div className='p-8 bg-white rounded-lg shadow dark:bg-gray-800'>
        <p className='text-3xl font-bold text-center text-gray-800 dark:text-white'>
          Our Advantageous
        </p>
        <p className='mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200'>
          See who gets the best output using MTask
        </p>
        <div className='flex flex-col items-center md:flex-row justify-center'>
          <div className='p-4'>
            <div className='mb-4 text-center opacity-90'>
              <a href='#' className='relative text-center inline-block'>
                <SiCodersrank size={150} />
              </a>
            </div>
            <div className='text-center'>
              <p className='text-2xl text-gray-800 dark:text-white'>
                Benefit of Developer
              </p>

              <p className='max-w-xs  font-light text-gray-500 text-md dark:text-gray-400'>
                Revolutionize your project management with our user-friendly
                platform, providing developers with a seamless and collaborative
                environment. Streamline your coding tasks, enhance workflow
                efficiency, and take your development projects to unprecedented
                levels with our intuitive task management solution.
              </p>
            </div>
          </div>
          <div className='p-4'>
            <div className='mb-4 text-center opacity-90'>
              <a href='#' className='relative text-center inline-block'>
                <img
                  alt='profile'
                  src='https://logowik.com/content/uploads/images/student5651.jpg'
                  className='mx-auto object-cover rounded-full h-40 w-40 '
                />
              </a>
            </div>
            <div className='text-center'>
              <p className='text-2xl text-gray-800 dark:text-white'>
                Benefit of Student
              </p>

              <p className='max-w-xs  font-light text-gray-500 text-md dark:text-gray-400'>
                Enable students with effective task coordination, aiding them in
                arranging assignments, monitoring due dates, and overseeing
                study timetables effortlessly. Elevate time management
                proficiency by prioritizing tasks and cultivating a structured
                approach to academic responsibilities. Foster collaborative
                learning opportunities that encourage students to exchange
                resources and ideas.
              </p>
            </div>
          </div>
          <div className='p-4'>
            <div className='mb-4 text-center opacity-90'>
              <a href='#' className='relative text-center inline-block'>
                <CiBank size={150}/>
              </a>
            </div>
            <div className='text-center'>
              <p className='text-2xl text-gray-800 dark:text-white'>
                Benefit of Bankers
              </p>

              <p className='max-w-xs  font-light text-gray-500 text-md dark:text-gray-400'>
                Empower bankers with our platform's robust financial task
                management, allowing for seamless organization of transactions,
                deadlines. Efficiency by prioritizing tasks, ensuring timely
                responses, and enhancing overall productivity. Elevate banking
                operations with our user-friendly solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTasky;

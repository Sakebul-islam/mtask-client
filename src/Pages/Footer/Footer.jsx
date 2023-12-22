import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Logo from '../../components/shared/Logo';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='md:mt-20 mt-10'>
        <footer className='bg-neutral-300'>
          <div className='container py-10 mx-auto'>
            <div className='flex flex-col items-center text-center'>
              <Link to={'/'} className='flex items-center'>
                <h1 className='black font-bold text-4xl'>
                  <Logo />
                </h1>
              </Link>

              <div className='flex flex-wrap justify-center mt-6 '>
                <Link
                  to={'/'}
                  className='mx-4 text-gray-900 font-semibold transition-colors duration-300 hover:text-[#524FF5]'
                >
                  Home
                </Link>
                <Link
                  to={'/why-tasky'}
                  className='mx-4 text-gray-900 font-semibold transition-colors duration-300 hover:text-[#524FF5]'
                >
                  Why MTask
                </Link>

                <Link
                  to={'/faq'}
                  className='mx-4 text-gray-900 font-semibold transition-colors duration-300 hover:text-[#524FF5]'
                >
                  FAQ
                </Link>
                <a
                  href='#'
                  className='mx-4 text-gray-900 font-semibold transition-colors duration-300 hover:text-[#524FF5]'
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className='px-6 -mb-2'>
              <hr className='border-neutral-500 my-8'/>

              <div className='text-center'>
                <p className=' text-black dark:text-gray-300 text-center'>
                  Copyright © {currentYear} - All right by&nbsp;
                  <Link to={'/'}>
                    <span className='font-heading text-[#03b97c] font-bold'>
                      MTask
                    </span>
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

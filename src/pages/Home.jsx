import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';

const Home = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex justify-between mb-20'>
        <h2 className='text-primary my-10 lg:text-3xl md:text-2xl sm:text-xl px-5'>
          Welcome to my Portfolio
        </h2>
        <a
          class='bg-primary hover:bg-blue-400 text-white flex items-center font-bold border-b-4 border-blue-700 hover:border-blue-500 h-10 self-center mx-2 rounded text-xs flex-1 custom-max-w-9'
          href='mailto:hire.julio96@gmail.com'
        >
          <p className='flex mx-auto items-center gap-2'>
            Hire <AiOutlineMail />
          </p>
        </a>
      </div>
      <div className='bg-gray-300 rounded px-2 py-2 text-center mx-2 dark:bg-gray-700'>
        <h1 className='font-light sm:text-base md:text-lg lg:text-xl text-secondary dark:text-white'>
          I am <span className='text-primary'>Júlio Araújo</span> -{' '}
          <span>
            <Typewriter
              words={[
                'A developer based in Porto',
                'Frontend enthusiast',
                'Passionate for beautiful UI/UX designs',
                'Love to learn',
                'Love Teamwork',
              ]}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>

      <div className='flex justify-center gap-4 mt-32'>
        <a
          href='/projects'
          rel='noreferrer'
          className='flex items-center gap-1 bg-transparent hover:bg-gray-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'
        >
          Projects
        </a>
        <Link
          to='/files/cv.pdf'
          target='_blank'
          download
          class='bg-primary hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded shadow'
        >
          Download CV
        </Link>
      </div>
    </section>
  );
};

export default Home;

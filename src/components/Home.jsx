import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:mx-[100px]'>
        <p>Hi, my name is</p>
        <h1 className='text text-4xl sm:text7xl font-bold'>Rafael Guerra</h1>
        <h2 className='text text-4xl sm:text7xl font-bold text-[#647C90]'>I'm a Web Developer</h2>
        <p className='text-[#4E4F50] py-4 max-w-[700px]'>Experienced Web Developer seeking opportunity to bring knowledge of programming to make the world a better place.</p>
        <div>
        <Link to="skills" smooth={true} duration={800}>
          <button className='text-[#fff] group bg-black border-2 flex items-center p-4'>
            View Skills
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight size={25} className='ml-2'/>
            </span>
          </button>
        </Link>
        </div>
      </div>
      {/* <p className='text-[10px]'>John 16:33</p> */}
    </div>
  );
};

export default Home;

import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import LARAVEL from '../assets/laravel.png';
import MONGO from '../assets/mongo.png';
import MYSQL from '../assets/mysql.png';
import REACT from '../assets/react.png';
import PHP from '../assets/php.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
        {/**Container */}
        <div className='w-full h-full p-4 flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] w-full text-center py-4'>
               <p className='text-4xl font-bold inline border-b-4 border-[#647C90]'>
                    Skills
                </p>
            </div>
            <div className='max-w-[1000px] w-full text-center grid grid-cols-2 sm:grid-cols-4'>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='py-4 font-bold'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={CSS} alt="html icon" />
                    <p className='py-4 font-bold'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={JS} alt="html icon" />
                    <p className='py-4 font-bold'>JAVASCRIPT</p>
                </div>
                <div className='hover:scale-110 duration-500'> 
                    <img className='py-4 w-20 mx-auto' src={PHP} alt="html icon" />
                    <p className='py-4 font-bold'>PHP</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={LARAVEL} alt="html icon" />
                    <p className='py-4 font-bold'>LARAVEL</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={MYSQL} alt="html icon" />
                    <p className='py-4 font-bold'>MYSQL</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={MONGO} alt="html icon" />
                    <p className='py-4 font-bold'>MONGO</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='py-4 w-20 mx-auto' src={REACT} alt="html icon" />
                    <p className='py-4 font-bold'>REACT</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills
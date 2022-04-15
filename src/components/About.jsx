import React from 'react';
import Raf from '../assets/raf.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full'>
                <div className='pb-8 pl-4 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#647C90]'>
                        About
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8'>
                <div className='h-[500px]'>
                    <p className='font-bold text-[#647C90] text-3xl text-center pb-3'>
                        that's me. Raf.
                    </p>
                    <img className='block hover:bg-[#fff] rounded-full object-cover object-top h-full w-full b' src={Raf} alt="raf image" />
                </div>
                <div>
                    <p className='font-bold text-3xl py-52 px-10'>
                        Backend developer devoted to make web experiences focused on <i>simplicity</i> and <i>purpose.</i>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;

import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen'>
        <div className='h-full w-full flex flex-col text-center justify-center items-center p-4'>
             <form method='POST' className='flex flex-col max-w-[600px] w-full' action="https://getform.io/f/cd36bdee-dfd4-4d8c-a56c-62421e32d3ea">
                <p className='text-4xl font-bold inline border-b-4 border-[#647C90] py-4'>
                    Contact
                </p>
                <p className='py-4'> <i>Submit the form below or send me an email at rafael.iso.guerra@gmail.com</i> </p>
                <input className='p-4 bg-[#E2DED0]' type="text" placeholder='Name' name='name' />
                <input className='p-4 my-4 bg-[#E2DED0]' type="text" placeholder='Email' name='email' />
                <textarea className='p-4 bg-[#E2DED0]' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                <button className='border-4 bg-[#647C90] hover:bg-[#fff] mx-auto px-4 py-4 my-8'>
                    Let's Collaborate
                </button>
             </form>
        </div>
    </div>
  );
};

export default Contact;
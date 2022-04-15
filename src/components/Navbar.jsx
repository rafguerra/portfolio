import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Logo from '../assets/rg-logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [hideNavbar, setNavState] = useState(false);
    const handleToggleNav = () => setNavState(!hideNavbar);
    const handleOnlickMobileNav = () => setNavState(false);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff] text-black'>
        <div>
             <img src={Logo} alt="Logo image" style={{width: '90px'}}/>
        </div>

        {/*Menu*/}
        <ul className='hidden md:flex'>
            <Link to="home" smooth={true} offset={50} duration={800}>
                <li>Home</li>
            </Link>
            <Link to="about" smooth={true} offset={50} duration={800}>
                <li>About</li>
            </Link>
            <Link to="skills" smooth={true} offset={50} duration={800}>
                <li>Skills</li>
            </Link>
            <Link to="contact" smooth={true} offset={50} duration={800}>
                <li>Contact</li>
            </Link>
        </ul>

        {/*Hamburger */}
        <div onClick={handleToggleNav} className='md:hidden z-10'>
            {!hideNavbar ? <FaBars/> : <FaTimes style={{color: 'white'}}/>}
        </div>

        {/*Mobile Menu */}
        <div className={!hideNavbar ? 'hidden' : 'text-white bg-[#000] absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-4 text-4xl'>
                <Link onClick={handleOnlickMobileNav} to="home" smooth={true} offset={50} duration={800}>
                    Home
                </Link>
                </li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleOnlickMobileNav} to="about" smooth={true} offset={50} duration={800}>
                    About
                </Link>
                </li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleOnlickMobileNav} to="skills" smooth={true} offset={50} duration={800}>
                    Skills
                </Link>
                </li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleOnlickMobileNav} to="contact" smooth={true} offset={50} duration={800}>
                    Contact
                </Link>
                </li>
            </ul>
        </div>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500'>
                    <a className='w-[160px] h-[60px] flex justify-between items-center ' href="https://www.linkedin.com/in/rafael-guerra/" target="_blank">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333]'>
                    <a className='w-[160px] h-[60px] flex justify-between items-center text-[#fff]' href="https://github.com/rafguerra" target="_blank">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500'>
                    <a className='w-[160px] h-[60px] flex justify-between items-center ' href="mailto:rafael.iso.guerra@gmail.com">
                        Email <SiGmail size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
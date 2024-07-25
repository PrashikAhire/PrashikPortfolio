import React from 'react'
//importing image 
import logo from "../assets/Prashiklogo.jpg"
// importing icons 
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className=" mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" /></div>
        {/* following className is used to set the icon positions  */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://in.linkedin.com/in/prashik-ahire-324292278" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
        </a>
        <a href="https://github.com/PrashikAhire" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
        </a>
        <a href="https://www.instagram.com/prashik8774/" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
        </a>

            </div></nav>
  )
}

export default Navbar

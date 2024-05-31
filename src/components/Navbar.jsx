import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-[100px] py-[20px] bg-gray-200">
      <div className="">
        <Link to="/"><img src={Logo} alt="logo" className='w-[50%] h-[70%]'/></Link>
      </div>
      <ul className="flex gap-[20px] items-center text-xl font-bold">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/book-list">Book Lists</Link>
        </li>
      </ul>
      <div className="">
        <Link to="/login">
        <button className='bg-orange-400 rounded-lg px-[15px] py-[10px] font-bold'>
        Login
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;

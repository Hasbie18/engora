import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


//  bg-[#1d1f23]/70 backdrop-blur-sm

const NavigationBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
        <div className="sticky top-0 border-r-gray-90 bg-[#1d1f23]/70 backdrop-blur-sm">
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white '>
                <h1 className='w-full text-3xl font-bold text-[#b8b9fa]'>ENGORA</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Company</li>
                    <li className='p-4'>Resources</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1d1f23] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#b8b9fa] m-4'>ENGORA</h1>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>

    );
}

export default NavigationBar;
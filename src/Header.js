import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className='flex justify-between px-5 bg-primary font-bold py-2 sticky top-0 z-20'>
            <a href='/'>A.Arul</a>
            <nav className='hidden md:block'>
                <ul className='flex text-white'>
                    <li className='hover:bg-[#2b2d77]'><a href='/'>Home</a></li>
                    <li className='hover:bg-[#2b2d77]'><a href='#about'>About</a></li>
                    <li className='hover:bg-[#2b2d77]'><a href='#skills'>Skills</a></li>
                    <li className='hover:bg-[#2b2d77]'><a href='#experience'>Experience</a></li>
                    <li className='hover:bg-[#2b2d77]'><a href='#projects'>Projects</a></li>
                    <li className='hover:bg-[#2b2d77]'><a href='#resume'>Resume</a></li>
                    <li className='hover:bg-[#2b2d77]'><a href='#contacts'>Contacts</a></li>
                </ul>
            </nav>
            {toggle &&<nav className='block md:hidden '>
                <ul onClick={()=>setToggle(!toggle)} className='flex flex-col text-white mobile-nav'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#contacts'>Contacts</a></li>
                </ul>
            </nav>}
            <button className='block md:hidden' onClick={()=>setToggle(!toggle)}><Bars3Icon className='text-white h-5'/></button>

        </header>
    )
}

export default Header
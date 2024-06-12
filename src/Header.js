import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <header className='fixed top-0 left-0 w-full flex justify-between px-5 bg-primary font-bold py-2 z-20'>
            <a href='#home'>A.Arul</a>
            <nav className='hidden md:block'>
                <ul className='flex text-white'>
                    {['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contacts'].map((section) => (
                        <li key={section} className='hover:bg-[#2b2d77]'>
                            <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            {toggle && (
                <nav className='block md:hidden'>
                    <ul onClick={handleToggle} className='flex flex-col text-white mobile-nav'>
                        {['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contacts'].map((section) => (
                            <li key={section}>
                                <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            <button
                className='block md:hidden'
                onClick={handleToggle}
                aria-label='Toggle Navigation'
            >
                <Bars3Icon className='text-white h-5' />
            </button>
        </header>
    );
};

export default Header;

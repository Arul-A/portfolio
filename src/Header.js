import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contacts', href: '#contacts' }
    ];

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <header className='fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 bg-primary/95 backdrop-blur-md font-bold py-4 z-50 shadow-md border-b border-white/10'>
            <a href='#home' className='text-white text-xl md:text-2xl tracking-wide font-extrabold hover:text-cyan-300 transition-colors'>
                Arul Annamalai
            </a>
            
            <nav className='hidden lg:block'>
                <ul className='flex items-center space-x-1 text-white text-sm font-medium'>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href} 
                                className='px-3 py-2 rounded-lg hover:bg-secondary/60 hover:text-cyan-300 transition-colors'
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {toggle && (
                <nav className='block lg:hidden'>
                    <ul onClick={handleToggle} className='flex flex-col text-white mobile-nav py-6 px-4 space-y-2 bg-gray-900/95 backdrop-blur-lg fixed top-16 left-0 w-full border-b border-white/10 shadow-2xl'>
                        {navLinks.map((item) => (
                            <li key={item.name} className='text-center py-2'>
                                <a 
                                    href={item.href}
                                    className='text-base font-semibold hover:text-cyan-300 transition-colors block'
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <button
                className='block lg:hidden text-white p-1 rounded-md focus:outline-none'
                onClick={handleToggle}
                aria-label='Toggle Navigation'
            >
                {toggle ? <XMarkIcon className='h-7 w-7' /> : <Bars3Icon className='h-7 w-7' />}
            </button>
        </header>
    );
};

export default Header;

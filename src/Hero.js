import React from 'react';
import HeroImg from './assets/Arul1.jpg';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Hero = () => {
    const config = {
        title: "Frontend Software Engineer",
        description: "Building scalable, high-performance web applications with React.js, Next.js, and TypeScript. Experienced in real-time systems, state management, and modern cloud communications."
    };

    return (
        <section id='home' className='flex flex-col md:flex-row px-6 md:px-16 pt-32 pb-16 bg-primary justify-between items-center font-hero-font'>
            <div className='md:w-3/5 text-white'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                    Hi, <br />
                    I am <span className='text-cyan-300 font-extrabold'>Arul Annamalai</span>
                </h1>
                <p className='text-xl sm:text-2xl mt-3 font-semibold text-cyan-200 tracking-wide'>
                    {config.title}
                </p>
                <p className='text-base sm:text-lg mt-3 text-gray-200 font-sans max-w-xl leading-relaxed'>
                    {config.description}
                </p>

                <div className='flex flex-wrap items-center gap-4 text-black py-6'>
                    <a href='https://www.linkedin.com/in/arul-annamalai' target='_blank' rel="noreferrer" title='LinkedIn' className='p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                        <AiOutlineLinkedin size={28} />
                    </a>
                    <a href='https://github.com/Arul-A' target='_blank' rel="noreferrer" title='GitHub' className='p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                        <AiOutlineGithub size={28} />
                    </a>
                    <a href='https://leetcode.com/u/akarul2100/' target='_blank' rel="noreferrer" title='LeetCode (200+ Solved)' className='p-2 bg-white rounded-full hover:bg-black hover:text-[#FFA116] transition-all duration-300'>
                        <SiLeetcode size={28} />
                    </a>
                    <a href='https://wa.me/918072663220' target='_blank' rel="noreferrer" title='WhatsApp' className='p-2 bg-white rounded-full hover:bg-black hover:text-[#25D366] transition-all duration-300'>
                        <AiOutlineWhatsApp size={28} />
                    </a>
                    <a href='https://www.instagram.com/arul21021/?igsh=eHhybGY3MjN3NWky' target='_blank' rel="noreferrer" title='Instagram' className='p-2 bg-white rounded-full hover:bg-black hover:text-[#E4405F] transition-all duration-300'>
                        <AiOutlineInstagram size={28} />
                    </a>
                </div>

                <div className='flex flex-col mt-2'>
                    <p className='text-lg font-semibold tracking-wide font-sans text-gray-200'>Core Tech Stack</p>
                    <div className='flex flex-wrap items-center gap-3 mt-3'>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='React.js'>
                            <FaReact className='text-[#00D1F7] text-lg' />
                            <span>React</span>
                        </div>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='Next.js'>
                            <SiNextdotjs className='text-white text-lg' />
                            <span>Next.js</span>
                        </div>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='TypeScript'>
                            <SiTypescript className='text-[#3178C6] text-lg' />
                            <span>TypeScript</span>
                        </div>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='JavaScript'>
                            <SiJavascript className='text-[#F7DF1E] text-lg' />
                            <span>JavaScript</span>
                        </div>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='Tailwind CSS'>
                            <SiTailwindcss className='text-[#38BDF8] text-lg' />
                            <span>Tailwind CSS</span>
                        </div>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='Redux / Zustand'>
                            <SiRedux className='text-[#764ABC] text-lg' />
                            <span>Redux / Zustand</span>
                        </div>
                        <div className='flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-sm font-sans' title='Node.js'>
                            <FaNodeJs className='text-[#5FA04E] text-lg' />
                            <span>Node.js</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:w-2/5 flex justify-center mt-10 md:mt-0'>
                <div className='relative group'>
                    <div className='absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500'></div>
                    <img src={HeroImg} alt='Arul Annamalai' className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
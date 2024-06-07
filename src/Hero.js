import React from 'react'
import HeroImg from './assets/Arul1.jpg'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineGithub, AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";


const Hero = () => {
    const config = {
        subtitle: "I am a Front-end Web Developer"
    }
    return (
        <section className='flex flex-col md:flex-row px-5 pt-32 pb-16 bg-primary justify-center items-center font-hero-font'>
            <div className='md:w-1/2 text-white text-4xl'><h1>Hi, <br /> I am <span className='text-black font-bold'>Arul</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
                <div className='flex text-black py-10 '>
                    <a href='https://www.linkedin.com/in/arul-annamalai' target='_blank' rel="noreferrer" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                    <a href='https://www.instagram.com/arul21021/?igsh=eHhybGY3MjN3NWky' target='_blank' rel="noreferrer" className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                    <a href='https://github.com/Arul-A' target='_blank' rel="noreferrer" className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                    <a href='https://wa.me/+91 8072663220' target='_blank' rel="noreferrer" className='hover:text-white'><AiOutlineWhatsApp size={40} /></a>
                </div>
                <div className='flex flex-col'>
                    <p >Tech stack</p>
                    <div className='flex'>
                        <AiOutlineHtml5 className='bg-white mt-3 mr-3 text-[#DD4B25] rounded-md cursor-pointer' />
                        <BiLogoCss3 className='bg-white text-[#254BDF] m-3 rounded-md cursor-pointer' />
                        <TbBrandJavascript className='bg-yellow-600 m-3 text-black rounded-md cursor-pointer' />
                        <BsBootstrap className='bg-purple-900 m-3 text-white rounded-md cursor-pointer' />
                        <SiTailwindcss className='bg-white text-[#36B6F2] m-3 rounded-md cursor-pointer' />
                        <FaReact className='bg-black text-[#00D1F7] m-3 rounded-md cursor-pointer' />

                    </div >
                </div >
            </div >
            <img src={HeroImg} alt='Hero' className='md:w-1/4 rounded-full' />
        </section >
    )
}

export default Hero
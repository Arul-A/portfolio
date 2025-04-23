import React from 'react'
// import AboutImg from './assets/about.png'
import Lottie from 'lottie-react';
import about from './assets/About1.json'

const About = () => {
    return (
        <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 text-white py-10'>
            <div className='md:w-1/2'>
                <Lottie loop={true} animationData={about} className='pb-5'/>
            </div>
            {/* <div className='md:w-1/2 flex flex-col justify-center'>
                <div className='flex flex-col justify-center mb-3' >
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p>Hi, I’m Arul, a dedicated and motivated professional transitioning from a successful career in the BPO industry to pursue my passion for web development.</p>
                    <p className='pt-5'> With a strong foundation in customer service and problem-solving, I am now focused on creating engaging and dynamic user experiences as a Front End Developer, specializing in React.</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[220px] font-bold'>My Journey</h1>
                    <p>After 3 years in the BPO sector, where I honed my skills in communication, project management, and client satisfaction, I decided to follow my interest in web development. </p>
                    <p className='pt-5'>I have since dedicated my time to learning and mastering front-end technologies, with a particular focus on React js (Vite), JavaScript, HTML, and CSS (Tailwind css & Bootstrap).</p>
                </div>
            </div> */}

            <div className='md:w-1/2 flex flex-col justify-center'>
                <div className='flex flex-col justify-center mb-3'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p>Hi, I’m Arul, a passionate Front-End Developer with a strong foundation in building dynamic and responsive web applications.</p>
                    <p className='pt-5'>Currently working at TeleCMI Communications Pvt Ltd, I specialize in creating seamless user experiences using React, Vue.js, Tailwind CSS, and Express.js.</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[220px] font-bold'>My Journey</h1>
                    <p>I began my professional career in the BPO industry, where I developed essential skills in communication, data accuracy, and team leadership.</p>
                    <p className='pt-5'>Motivated to pursue my passion for tech, I transitioned into web development and have since worked on production-level projects involving custom blog CMS, API integration, and responsive UI development using modern front-end frameworks.</p>
                </div>
            </div>

        </section>
    )
}

export default About
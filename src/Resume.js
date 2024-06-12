import React from 'react';
// import resumeImg from './assets/resume-image.jpg'
import resume from './assets/resume.pdf';
import Lottie from 'lottie-react';
import resumeLottie from './assets/resume-animation.json';

export const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row items-center bg-secondary text-white py-10'>
      <div className='md:w-1/2 flex justify-center'>
        {/* <img className='h-[500px]' src={resumeImg} alt='resume'/> */}
        <Lottie loop={true} animationData={resumeLottie} className='h-[400px] md:h-[500px]' />
      </div>
      <div className='md:w-1/2 px-10 md:px-20 pb-10 flex flex-col items-center md:items-start'>
        <h1 className='text-4xl border-b-4 border-primary w-[130px] mb-4'>Resume</h1>
        <p className='text-center md:text-left mb-4'>Here you can view my resume.</p>
        <a href={resume} download='Resume.pdf' type='button' className='btn'>
          Download
        </a>
      </div>
    </section>
  );
};

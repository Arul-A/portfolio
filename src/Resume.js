import React from 'react';
import resume from './assets/Arul.pdf';
import Lottie from 'lottie-react';
import resumeLottie from './assets/resume-animation.json';

export const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row items-center bg-secondary text-white py-16 px-6 md:px-16'>
      <div className='md:w-1/2 flex justify-center mb-8 md:mb-0'>
        <Lottie loop={true} animationData={resumeLottie} className='h-[350px] md:h-[450px] max-w-full' />
      </div>
      <div className='md:w-1/2 px-4 md:px-12 flex flex-col items-center md:items-start text-center md:text-left'>
        <h2 className='text-3xl sm:text-4xl border-b-4 border-primary w-fit mb-6 font-bold'>Resume</h2>
        <p className='text-base sm:text-lg text-gray-200 mb-2 leading-relaxed'>
          Explore my complete professional background, architecture experience, tech stack proficiencies, and project milestones.
        </p>
        <p className='text-sm text-cyan-300 mb-6 font-medium'>
          Frontend Software Engineer • React.js | Next.js | TypeScript | LiveKit | Zustand
        </p>
        <div className='flex flex-wrap gap-4'>
          <a 
            href={resume} 
            download='Arul_Annamalai_Frontend_Engineer.pdf' 
            type='button' 
            className='btn flex items-center gap-2 text-base'
          >
            <span>📄 Download Resume</span>
          </a>
          <a 
            href={resume} 
            target='_blank' 
            rel="noreferrer"
            className='scroll flex items-center gap-2 text-base'
          >
            <span>👁️ View PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react'
import resumeImg from './assets/resume.jpg'
import resume from './assets/resume.pdf'

export const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row py-10 px-5 items-center bg-secondary text-white'>
        <div className='md:w-1/2 flex justify-end'>
            <img className='h-[500px]' src={resumeImg} alt='resume'/>
        </div>
        <div className='md:w-1/2 px-20 pt-5'>
            <h1 className='text-4xl border-b-4 border-primary w-[130px]'>Resume</h1>
            <p>Here You can view my Resume.</p>
            <br />
            <a href={resume} download='resume' type='button' className='btn'>Download</a>
        </div>
    </section>
  )
}

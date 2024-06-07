import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col md:flex-row py-10 px-5 bg-primary text-white'>
      {/* Technical Skills Section */}
      <div className='flex flex-col w-full md:w-1/2 p-4'>
        <div className='flex justify-center mb-4'>
          <h3 className='text-3xl font-bold border-secondary border-b-4 w-[230px]'>Technical Skills</h3>
        </div>
        <div className='flex flex-col space-y-4 text-xl'>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>HTML5</p>
            <ProgressBar completed={90} bgColor='#DD4B25' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>CSS3</p>
            <ProgressBar completed={75} bgColor='#254BDF' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>Javascript</p>
            <ProgressBar completed={70} bgColor='#713F12' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
          <p className='w-full  text-center mb-4'>React</p>
            <ProgressBar completed={60} bgColor='#087A9F' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>Tailwind CSS</p>
            <ProgressBar completed={80} bgColor='#36B6F2' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>Bootstrap 5</p>
            <ProgressBar completed={76} bgColor='#5B397B' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>GitHub</p>
            <ProgressBar completed={82} bgColor='black' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
        </div>
      </div>

      {/* Professional Skills Section */}
      <div className='flex flex-col w-full md:w-1/2 p-4'>
        <div className='flex justify-center mb-4'>
          <h3 className='text-3xl font-bold  border-secondary border-b-4 w-[270px]'>Professional Skills</h3>
        </div>
        <div className='flex flex-col space-y-4 text-xl'>
        <div className='flex flex-col items-center'>
        <p className='w-full  text-center mb-4'>Projec Management</p>
            <ProgressBar completed={85} bgColor='#4CAF50' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
          <p className='w-full  text-center mb-4'>Team Work</p>
            <ProgressBar completed={90} bgColor='#2196F3' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>Communicatio</p>
            <ProgressBar completed={95} bgColor='#FFC107' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='w-full  text-center mb-4'>Creativity</p>
            <ProgressBar completed={80} bgColor='#9C27B0' animateOnRender={true} className='w-full md:w-3/4' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

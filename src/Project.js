import React from 'react'
import trendify from './assets/Trendify1.png'
import spices from './assets/Spices.png'
import social from './assets/Social.png'


const Project = () => {
  return (
    <section id='projects' className='flex flex-col py-20 px-5 justify-center items-center bg-primary text-white'>
      <div className='flex flex-col'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 text-center w-[150px] font-bold'>Projects</h1>
        <p className='mb-3'>There are some of the projects. I have built with HTML,CSS,Javascript & React ,Tailwind CSS and Bootstrap 5 </p>
      </div>
      <div className='w-full flex flex-col md:flex-row px-10 gap-5 justify-center z-10'>
        <div className='relative'>
          <img className='h-[370px] w-[480px]' src={trendify} alt='Trendify snap' />
          <div className='project-desc'>
            <p className='text-center py-5 px-10'>E-commerce website featuring a landing area, product listings, and a user inquiry section for browsing items and contacting support.</p>
            <p className='mb-3 ms-20 border-b-2 border-primary w-[140px]'>Technologies used:</p>
            <ul className='ms-20'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <br />
            <div className='flex justify-center mb-2'>
              <a className='btn' target='_blank' href='https://github.com/Arul-A/Trendify.git' rel="noreferrer">View project</a>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img className='h-[370px] w-[480px]' src={spices} alt='Spices snap' />
          <div className='project-desc'>
            <p className='text-center py-5 px-10'>Spices website  featuring a landing area, product listings, and a contact section.</p>
            <p className='mb-3 ms-20 border-b-2 border-primary w-[140px]'>Technologies used:</p>
            <ul className='ms-20'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
            </ul>
            <br />
            <div className='flex justify-center mb-2'>
              <a className='btn' target='_blank' href='https://github.com/Arul-A/Spice-hub.git' rel="noreferrer">View project</a>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img className='h-[370px] w-[480px]' src={social} alt='Social media snap' />
          <div className='project-desc'>
            <p className='text-center py-5 px-10'>
              Develop a React-based post website enabling users to add, delete, and edit posts, enhancing interactivity and user engagement.</p>
            <p className='mb-3 ms-20 border-b-2 border-primary w-[140px]'>Technologies used:</p>
            <ul className='ms-20'>
              <li>React JS</li>
              <li>CSS</li>
              <li>JSX</li>
              <li>Axios API</li>
            </ul>
            <br />
            <div className='flex justify-center mb-2'>
              <a className='btn' target='_blank' href='/' rel="noreferrer">View project</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Project
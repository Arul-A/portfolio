import React, { useState, useRef } from 'react';
import trendify from './assets/Trendify1.png';
import spices from './assets/Spices.png';
import social from './assets/Social.png';
import weather from './assets/Weather.png';

const projects = [
  {
    img: trendify,
    alt: 'Trendify snapshot',
    description: 'E-commerce website featuring a landing area, product listings, and a user inquiry section for browsing items and contacting support.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Arul-A/Trendify.git'
  },
  {
    img: spices,
    alt: 'Spices snapshot',
    description: 'Spices website featuring a landing area, product listings, and a contact section.',
    technologies: ['HTML', 'CSS', 'Bootstrap 5'],
    link: 'https://github.com/Arul-A/Spice-hub.git'
  },
  {
    img: social,
    alt: 'Social media snapshot',
    description: 'Develop a React-based post website enabling users to add, delete, and edit posts, enhancing interactivity and user engagement.',
    technologies: ['React JS', 'CSS', 'JSX', 'Axios API'],
    link: 'https://github.com/Arul-A/Social-media.git'
  },
  {
    img: weather,
    alt: 'Weather App snapshot',
    description: 'A weather forecast application that provides real-time weather data and forecasts with a responsive and user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Open Weather API'],
    link: 'https://github.com/Arul-A/Weather-App.git'
  }
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + projects.length) % projects.length);
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentProjects = () => {
    const endIndex = currentIndex + 3;
    if (endIndex > projects.length) {
      return [...projects.slice(currentIndex, projects.length), ...projects.slice(0, endIndex - projects.length)];
    }
    return projects.slice(currentIndex, endIndex);
  };

  return (
    <section id='projects' ref={projectsRef} className='flex flex-col py-20 px-5 justify-center items-center bg-primary text-white'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 text-center w-[150px] font-bold'>Projects</h1>
        <p className='mb-3 text-center'>Here are some of the projects I have built using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap 5.</p>
      </div>
      <div className='w-full flex flex-col md:flex-row px-10 gap-5 justify-center items-center'>
        {getCurrentProjects().map((project, index) => (
          <div key={index} className='relative flex flex-col items-center mb-5 md:mb-0'>
            <img className='h-[370px] w-[480px]' src={project.img} alt={project.alt} />
            <div className='project-desc p-5'>
              <p className='text-center py-5'>{project.description}</p>
              <p className='mb-3 border-b-2 border-primary w-[140px] mx-auto text-center'>Technologies used:</p>
              <ul className='list-disc flex flex-col items-center'>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className='flex justify-center mt-5 px-5'>
                <a className='btn' target='_blank' href={project.link} rel='noreferrer'>View project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between w-full px-10 mt-5'>
        <button onClick={handlePrev} className='scroll'>&lt; Previous</button>
        <button onClick={handleNext} className='scroll'>Next &gt;</button>
      </div>
    </section>
  );
};

export default Project;

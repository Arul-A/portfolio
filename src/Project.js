import React, { useState, useRef } from 'react';
import nextblog from './assets/nextblog.png';
import todo from './assets/todo.png';
import flipkart from './assets/flipkart.png';
import netflix from './assets/netflix.png';
import quickchat from './assets/quickchat.png';

const projects = [
  {
    title: 'Quick Chat',
    img: quickchat,
    alt: 'Quick Chat Application Preview',
    description: 'Real-time messaging platform built with MERN stack, Socket.IO, and Redux. Features JWT auth, live user presence tracking, and WebSocket messaging achieving sub-150ms latency for 500+ concurrent users with automated Vercel CI/CD.',
    technologies: ['React.js', 'Socket.IO', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'Vercel CI/CD'],
    link: 'https://github.com/Arul-A/mern-quickchat.git',
    host: 'https://mern-quickchat.vercel.app/login'
  },
  {
    title: 'NextBlog (CMS Platform)',
    img: nextblog,
    alt: 'NextBlog CMS Platform Preview',
    description: 'Full-stack blogging platform architected with Next.js App Router and React Server Components. Features SSR for SEO, JWT-authenticated admin CMS with full CRUD, live search, client/server pagination, and dynamic OpenGraph metadata.',
    technologies: ['Next.js', 'React Server Components', 'MongoDB', 'JWT Auth', 'Tailwind CSS', 'Vercel CI/CD'],
    link: 'https://github.com/Arul-A/next-blog',
    host: 'https://next-blog-lime-one.vercel.app/'
  },
  {
    title: 'Netflix Clone',
    img: netflix,
    alt: 'Netflix Clone Preview',
    description: 'Feature-rich streaming clone built with React, Vite, Tailwind CSS, and Firebase Authentication. Integrated TMDB REST API and Redux Toolkit for centralized catalog management and trailer playback.',
    technologies: ['React.js / Vite', 'Tailwind CSS', 'Firebase Auth', 'Redux Toolkit', 'TMDB API'],
    link: 'https://github.com/Arul-A/netflix-firebaseauth.git',
    host: 'https://net-flix-firebase.netlify.app/'
  },
  {
    title: 'Flipkart E-Commerce Clone',
    img: flipkart,
    alt: 'Flipkart Clone Preview',
    description: 'E-commerce platform featuring Supabase authentication, category filtering, cart management, responsive product catalogs, and state persistence with Redux Toolkit.',
    technologies: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Supabase'],
    link: 'https://github.com/Arul-A/flipkart_clone_project.git',
    host: 'https://flip-kart-clone.netlify.app/'
  },
  {
    title: 'Modern Task Management App',
    img: todo,
    alt: 'To-Do App Preview',
    description: 'Responsive productivity application with real-time task creation, categorized filtering, local storage synchronization, and animated Toastify notifications.',
    technologies: ['React.js / Vite', 'CSS3', 'Local Storage', 'React Toastify'],
    link: 'https://github.com/Arul-A/React-To-do-App.git',
    host: 'https://react-todo-applist.netlify.app'
  },
];

const ITEMS_PER_PAGE = 3;

const Project = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsRef = useRef(null);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <section id='projects' ref={projectsRef} className='flex flex-col py-16 px-6 md:px-16 justify-center items-center bg-primary text-white'>
      <div className='flex flex-col items-center mb-10 text-center'>
        <h2 className='text-3xl sm:text-4xl border-b-4 border-secondary pb-1 font-bold'>Featured Projects</h2>
        <p className='mt-3 text-gray-200 max-w-2xl text-sm sm:text-base'>
          Production-level applications and full-stack solutions built with React, Next.js, TypeScript, Node.js, WebSockets, and modern cloud platforms.
        </p>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch'>
        {currentProjects.map((project, index) => (
          <div 
            key={index} 
            className='relative flex flex-col bg-secondary/80 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-transform hover:-translate-y-1 duration-300'
          >
            <div className='h-48 w-full overflow-hidden bg-black/40 relative'>
              <img className='w-full h-full object-cover object-top' src={project.img} alt={project.alt} />
              <div className='absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent'></div>
            </div>

            <div className='p-6 flex flex-col flex-grow justify-between'>
              <div>
                <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                <p className='text-gray-200 text-sm leading-relaxed mb-4 line-clamp-4 hover:line-clamp-none transition-all'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5 mb-6'>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className='bg-white/10 text-cyan-200 text-xs px-2.5 py-1 rounded-full border border-white/5'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-3 pt-4 border-t border-white/10'>
                <a className='btn text-xs sm:text-sm flex-1 text-center py-2' target='_blank' href={project.link} rel='noreferrer'>
                  GitHub
                </a>
                {project.host && (
                  <a className='scroll text-xs sm:text-sm flex-1 text-center py-2' target='_blank' href={project.host} rel='noreferrer'>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between items-center w-full max-w-md mt-10 gap-4'>
        <button 
          onClick={handlePrev} 
          className='scroll text-sm sm:text-base flex-1 py-2 px-4' 
          aria-label="Previous Projects"
        >
          &larr; Previous
        </button>
        <span className='text-xs sm:text-sm text-gray-200 font-sans'>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button 
          onClick={handleNext} 
          className='scroll text-sm sm:text-base flex-1 py-2 px-4' 
          aria-label="Next Projects"
        >
          Next &rarr;
        </button>
      </div>
    </section>
  );
};

export default Project;

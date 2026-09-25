import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js / Next.js', level: 90, color: '#00D1F7' },
    { name: 'TypeScript / JavaScript (ES6+)', level: 88, color: '#3178C6' },
    { name: 'State Management (Zustand / Redux)', level: 88, color: '#764ABC' },
    { name: 'Tailwind CSS / CSS3 / HTML5', level: 92, color: '#38BDF8' },
    { name: 'Real-time & WebSockets (LiveKit / Socket.io)', level: 85, color: '#10B981' },
    { name: 'React Native & Electron.js', level: 75, color: '#61DAFB' },
  ];

  const backendAndDevOps = [
    { name: 'Node.js & Express.js (REST APIs)', level: 82, color: '#5FA04E' },
    { name: 'Auth (JWT / OAuth 2.0 / TOTP)', level: 85, color: '#F59E0B' },
    { name: 'Databases (MongoDB / Redis / MySQL)', level: 80, color: '#10B981' },
    { name: 'DevOps & Tools (Git, GitHub, Vercel CI/CD, FCM)', level: 88, color: '#EC4899' },
  ];

  const coreConcepts = [
    { name: 'Data Structures & Algorithms', level: 85, color: '#FFA116' },
    { name: 'Core Web Vitals & Performance', level: 90, color: '#3B82F6' },
    { name: 'System Design & Component Architecture', level: 84, color: '#8B5CF6' },
    { name: 'Agile / Scrum & Mentorship', level: 90, color: '#10B981' },
  ];

  return (
    <section id='skills' className='py-16 px-6 md:px-16 bg-primary text-white'>
      <div className='flex flex-col items-center mb-10'>
        <h2 className='text-3xl sm:text-4xl font-bold border-secondary border-b-4 pb-1 text-center'>
          Technical & Core Skills
        </h2>
        <p className='mt-3 text-gray-200 text-center max-w-2xl'>
          Comprehensive expertise across modern frontend engineering, real-time architectures, full-stack technologies, and problem solving.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Frontend & Real-time Section */}
        <div className='bg-black/25 backdrop-blur-sm p-6 rounded-2xl border border-white/10'>
          <h3 className='text-2xl font-bold text-cyan-300 mb-6 border-b border-white/10 pb-2'>
            Frontend & Real-Time Engineering
          </h3>
          <div className='space-y-4'>
            {frontendSkills.map(skill => (
              <div key={skill.name} className='flex flex-col'>
                <div className='flex justify-between text-sm sm:text-base font-medium mb-1.5'>
                  <span>{skill.name}</span>
                  <span className='text-gray-300'>{skill.level}%</span>
                </div>
                <ProgressBar 
                  completed={skill.level} 
                  bgColor={skill.color} 
                  baseBgColor='rgba(255,255,255,0.15)'
                  height='10px'
                  isLabelVisible={false}
                  animateOnRender={true} 
                  className='w-full' 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Backend, Cloud & DevOps Section */}
        <div className='bg-black/25 backdrop-blur-sm p-6 rounded-2xl border border-white/10'>
          <h3 className='text-2xl font-bold text-amber-300 mb-6 border-b border-white/10 pb-2'>
            Backend, APIs & Cloud Tools
          </h3>
          <div className='space-y-4'>
            {backendAndDevOps.map(skill => (
              <div key={skill.name} className='flex flex-col'>
                <div className='flex justify-between text-sm sm:text-base font-medium mb-1.5'>
                  <span>{skill.name}</span>
                  <span className='text-gray-300'>{skill.level}%</span>
                </div>
                <ProgressBar 
                  completed={skill.level} 
                  bgColor={skill.color} 
                  baseBgColor='rgba(255,255,255,0.15)'
                  height='10px'
                  isLabelVisible={false}
                  animateOnRender={true} 
                  className='w-full' 
                />
              </div>
            ))}
          </div>

          <div className='mt-6 pt-4 border-t border-white/10'>
            <h4 className='text-lg font-semibold text-gray-200 mb-3'>Additional Tooling & Technologies:</h4>
            <div className='flex flex-wrap gap-2 text-xs sm:text-sm'>
              {['Docker (Basic)', 'Postman', 'AWS (Basic)', 'Electron.js', 'FCM', 'REST APIs', 'OAuth 2.0', 'Redis', 'MySQL'].map((tool) => (
                <span key={tool} className='bg-white/10 px-3 py-1 rounded-full border border-white/10 text-gray-200'>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Concepts & Professional Focus */}
      <div className='mt-12 bg-black/25 backdrop-blur-sm p-6 rounded-2xl border border-white/10'>
        <h3 className='text-2xl font-bold text-center text-emerald-300 mb-8'>
          Core Competencies & Practices
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          {coreConcepts.map(skill => (
            <div key={skill.name} className='flex flex-col items-center'>
              <div className='w-24 h-24 sm:w-28 sm:h-28 mb-3'>
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textSize: '18px',
                    pathColor: skill.color,
                    textColor: '#fff',
                    trailColor: 'rgba(255,255,255,0.15)'
                  })}
                />
              </div>
              <p className='text-sm sm:text-base font-medium text-gray-200'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

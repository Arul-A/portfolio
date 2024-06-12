import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col md:flex-row py-10 px-5 bg-primary text-white'>
      {/* Technical Skills Section */}
      <div className='flex flex-col w-full md:w-1/2 p-4'>
        <div className='flex justify-center mb-4'>
          <h3 className='text-3xl font-bold border-secondary border-b-4 w-[230px]'>Technical Skills</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-xl'>
          {[
            { name: 'HTML5', level: 90, color: '#DD4B25' },
            { name: 'CSS3', level: 75, color: '#254BDF' },
            { name: 'JavaScript', level: 74, color: '#713F12' },
            { name: 'React', level: 70, color: '#087A9F' },
            { name: 'Tailwind CSS', level: 80, color: '#36B6F2' },
            { name: 'Bootstrap 5', level: 76, color: '#5B397B' },
            { name: 'GitHub', level: 82, color: 'black' }
          ].map(skill => (
            <div key={skill.name} className='flex flex-col items-center'>
              <p className='w-full text-center mb-4'>{skill.name}</p>
              <ProgressBar completed={skill.level} bgColor={skill.color} animateOnRender={true} className='w-full md:w-3/4' />
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills Section */}
      <div className='flex flex-col w-full md:w-1/2 p-4'>
        <div className='flex justify-center mb-4'>
          <h3 className='text-3xl font-bold border-secondary border-b-4 w-[270px]'>Professional Skills</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-xl'>
          {[
            { name: 'Project Management', level: 85, color: '#E7D37F' },
            { name: 'Team Work', level: 90, color: '#006989' },
            { name: 'Communication', level: 92, color: '#FFAA80' },
            { name: 'Creativity', level: 90, color: '#AF47D2' }
          ].map(skill => (
            <div key={skill.name} className='flex flex-col items-center h-[200px] w-full'>
              <p className='w-full text-center mb-4'>{skill.name}</p>
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textSize: '15px',
                  pathColor: skill.color,
                  textColor: '#fff'
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

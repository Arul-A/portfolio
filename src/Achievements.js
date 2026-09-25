import React from 'react';
import { FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    {
      icon: <SiLeetcode className="text-[#FFA116] text-3xl" />,
      title: "200+ LeetCode DSA Problems",
      desc: "Solved over 200+ algorithmic challenges covering arrays, dynamic programming, trees, graphs, and system design patterns with optimal time & space complexity."
    },
    {
      icon: <FaTrophy className="text-yellow-400 text-3xl" />,
      title: "Enterprise Cloud Communication Delivery",
      desc: "Delivered production-ready modules for AI-powered communication products: IVR Call Flow Builder, LiveKit real-time calling, and multi-tenant auth workflows."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Aringar Anna Government College, Villupuram",
      year: "2017 – 2020",
      grade: "CGPA: 7.6 / 10",
      details: "Focused on core computing fundamentals, database management, object-oriented programming, and software engineering."
    }
  ];

  const certifications = [
    { 
      name: "Frontend Development Certification", 
      issuer: "GeeksforGeeks",
      date: "May 2025", 
      link: "https://www.geeksforgeeks.org/certificate/0a36884f589687b40adbf468468475ae" 
    },
    { 
      name: "Problem Solving (Basic)", 
      issuer: "HackerRank",
      date: "Apr 2025",
      link: "https://www.hackerrank.com/certificates/955bb65f54f5"
    },
    { 
      name: "JavaScript (Basic)", 
      issuer: "HackerRank",
      date: "Apr 2025",
      link: "https://www.hackerrank.com/certificates/45b80eb5a1ec"
    },
    { 
      name: "SQL Bootcamp / Fundamentals", 
      issuer: "Udemy",
      date: "Feb 2024",
      link: "https://www.udemy.com/certificate/UC-a29732c9-8a6a-4dd8-b294-d929bd42c239/"
    }
  ];

  return (
    <section id='achievements' className='py-16 px-6 md:px-16 bg-secondary text-white'>
      <div className='flex flex-col items-center mb-12 text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold border-b-4 border-primary pb-1'>
          Achievements & Education
        </h2>
        <p className='mt-3 text-gray-200 max-w-2xl text-sm sm:text-base'>
          Academic qualifications, algorithmic milestones, and professional honors.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Achievements */}
        <div className='bg-primary/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between'>
          <div>
            <div className='flex items-center gap-3 mb-6 border-b border-white/10 pb-3'>
              <FaTrophy className='text-yellow-400 text-2xl' />
              <h3 className='text-2xl font-bold text-white'>Achievements</h3>
            </div>
            <div className='space-y-6'>
              {achievements.map((item, idx) => (
                <div key={idx} className='flex items-start gap-4'>
                  <div className='p-2.5 bg-black/40 rounded-xl border border-white/10 mt-1 shrink-0'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='text-lg font-bold text-cyan-300'>{item.title}</h4>
                    <p className='text-gray-200 text-sm mt-1 leading-relaxed'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className='bg-primary/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between'>
          <div>
            <div className='flex items-center gap-3 mb-6 border-b border-white/10 pb-3'>
              <FaGraduationCap className='text-cyan-300 text-2xl' />
              <h3 className='text-2xl font-bold text-white'>Education</h3>
            </div>
            {education.map((edu, idx) => (
              <div key={idx} className='space-y-3'>
                <h4 className='text-lg font-bold text-amber-300'>{edu.degree}</h4>
                <p className='text-gray-200 text-sm font-medium'>{edu.institution}</p>
                <div className='flex justify-between items-center text-xs sm:text-sm text-cyan-200 pt-1'>
                  <span className='bg-white/10 px-3 py-1 rounded-full'>{edu.year}</span>
                  <span className='bg-white/10 px-3 py-1 rounded-full font-semibold'>{edu.grade}</span>
                </div>
                <p className='text-gray-300 text-sm pt-2 leading-relaxed'>{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className='bg-primary/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between'>
          <div>
            <div className='flex items-center gap-3 mb-6 border-b border-white/10 pb-3'>
              <FaCertificate className='text-emerald-400 text-2xl' />
              <h3 className='text-2xl font-bold text-white'>Certifications</h3>
            </div>
            <div className='space-y-4'>
              {certifications.map((cert, idx) => (
                <div key={idx} className='p-3.5 bg-black/30 rounded-xl border border-white/10 flex justify-between items-center gap-2'>
                  <div className='overflow-hidden'>
                    <h4 className='text-sm sm:text-base font-semibold text-white truncate'>{cert.name}</h4>
                    <span className='text-xs text-gray-300'>
                      {cert.issuer ? `${cert.issuer} • ` : ''}{cert.date}
                    </span>
                  </div>
                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target='_blank' 
                      rel='noreferrer'
                      className='text-emerald-300 hover:text-white text-xs font-bold bg-emerald-500/20 hover:bg-emerald-500/40 px-2.5 py-1.5 rounded border border-emerald-500/40 shrink-0 transition-all flex items-center gap-1'
                      title='Verify Certificate on GeeksforGeeks'
                    >
                      <span>Verify</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    <span className='text-emerald-400 text-xs font-bold bg-emerald-500/20 px-2 py-1 rounded border border-emerald-500/30 shrink-0'>
                      Verified
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

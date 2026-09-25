import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from './assets/contact.json';
import Lottie from 'lottie-react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const Contacts = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_fwi8ixi', 
        'template_ejvram8', 
        form.current, 
        'XjfU3PIz1-Zwd4FMe'
      )
      .then(
        () => {
          setIsSending(false);
          setMessage('Thank you! Your message was sent successfully.');
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 5000);
        },
        (error) => {
          setIsSending(false);
          setMessage(`Failed to send message: ${error.text || 'Please try again later'}`);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 5000);
        }
      );
      
    e.target.reset();
  };

  return (
    <section id='contacts' className='bg-primary py-16 px-6 md:px-16 flex flex-col items-center text-white'>
      <h2 className='text-3xl sm:text-4xl border-b-4 border-secondary pb-1 mb-10 font-bold'>
        Get In Touch
      </h2>

      <div className='flex flex-col lg:flex-row w-full max-w-6xl gap-8 lg:gap-12 items-center justify-center'>
        {/* Contact Info & Form */}
        <div className='flex flex-col w-full lg:w-[48%] max-w-lg bg-black/25 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl'>
          <h3 className='text-xl sm:text-2xl font-bold text-cyan-300 mb-2'>Let's Connect & Collaborate</h3>
          <p className='text-gray-200 text-xs sm:text-sm mb-5 leading-relaxed'>
            Open for frontend engineering opportunities, architectural discussions, or exciting new projects. Feel free to reach out directly or submit a message below.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5'>
            <div className='flex items-center gap-2.5 bg-white/10 p-2.5 rounded-xl border border-white/5'>
              <HiOutlineMail className='text-cyan-300 text-xl shrink-0' />
              <div className='overflow-hidden'>
                <p className='text-[10px] text-gray-300 uppercase tracking-wider'>Email</p>
                <a href='mailto:akarul2100@gmail.com' className='text-xs font-semibold hover:underline truncate block'>
                  akarul2100@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-center gap-2.5 bg-white/10 p-2.5 rounded-xl border border-white/5'>
              <HiOutlinePhone className='text-emerald-400 text-xl shrink-0' />
              <div>
                <p className='text-[10px] text-gray-300 uppercase tracking-wider'>Phone / WhatsApp</p>
                <a href='tel:+918072663220' className='text-xs font-semibold hover:underline block'>
                  +91 80726 63220
                </a>
              </div>
            </div>

            <div className='flex items-center gap-2.5 bg-white/10 p-2.5 rounded-xl border border-white/5 sm:col-span-2'>
              <HiOutlineLocationMarker className='text-pink-400 text-xl shrink-0' />
              <div>
                <p className='text-[10px] text-gray-300 uppercase tracking-wider'>Location</p>
                <p className='text-xs font-semibold'>Villupuram, Tamil Nadu, 605602, India</p>
              </div>
            </div>
          </div>

          <div className='flex items-center gap-2.5 mb-5'>
            <span className='text-xs text-gray-300'>Socials:</span>
            <a href='https://www.linkedin.com/in/arul-annamalai' target='_blank' rel="noreferrer" className='p-1.5 bg-white/10 hover:bg-white hover:text-black rounded-full transition-all' title='LinkedIn'>
              <AiOutlineLinkedin size={18} />
            </a>
            <a href='https://github.com/Arul-A' target='_blank' rel="noreferrer" className='p-1.5 bg-white/10 hover:bg-white hover:text-black rounded-full transition-all' title='GitHub'>
              <AiOutlineGithub size={18} />
            </a>
            <a href='https://leetcode.com/u/akarul2100/' target='_blank' rel="noreferrer" className='p-1.5 bg-white/10 hover:bg-[#FFA116] hover:text-black rounded-full transition-all' title='LeetCode'>
              <SiLeetcode size={18} />
            </a>
            <a href='https://wa.me/918072663220' target='_blank' rel="noreferrer" className='p-1.5 bg-white/10 hover:bg-[#25D366] hover:text-black rounded-full transition-all' title='WhatsApp'>
              <AiOutlineWhatsApp size={18} />
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-3.5'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-xs font-semibold mb-1'>Your Name</label>
              <input 
                type="text" 
                id='name' 
                name="user_name" 
                placeholder='e.g. John Doe'
                className='p-2.5 rounded-lg text-black bg-white/95 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-xs sm:text-sm' 
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-xs font-semibold mb-1'>Your Email</label>
              <input 
                type="email" 
                id='email' 
                name="user_email" 
                placeholder='e.g. john@example.com'
                className='p-2.5 rounded-lg text-black bg-white/95 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-xs sm:text-sm' 
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='message' className='text-xs font-semibold mb-1'>Message</label>
              <textarea 
                id='message' 
                name="message" 
                rows={3}
                placeholder='Type your message or project inquiry...'
                className='p-2.5 rounded-lg text-black bg-white/95 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-xs sm:text-sm' 
                required 
              />
            </div>
            <button 
              type='submit' 
              disabled={isSending}
              className='bg-secondary hover:bg-secondary/80 text-white font-bold py-2.5 px-5 rounded-lg transition-all shadow-md hover:shadow-cyan-500/20 disabled:opacity-50 mt-1 text-sm'
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {showMessage && (
            <div className='mt-3 p-2.5 bg-white/20 border border-white/20 rounded-lg text-center text-xs font-medium'>
              {message}
            </div>
          )}
        </div>

        {/* Animation side */}
        <div className='w-full lg:w-[52%] flex items-center justify-center self-center my-auto'>
          <Lottie loop={true} animationData={contact} className='max-w-[550px] w-full min-h-[350px] lg:min-h-[480px] object-contain' />
        </div>
      </div>
    </section>
  );
};

export default Contacts;

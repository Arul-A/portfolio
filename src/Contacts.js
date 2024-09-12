import React, { useRef, useState } from 'react';
// import contactImg from './assets/contact.png';
import emailjs from '@emailjs/browser';
import contact from './assets/contact.json'
import Lottie from 'lottie-react';

const Contacts = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_btax97b', 
        'template_u2hmytm', 
        form.current, 
        'li7WC8XvyxJOysyD1'
      )
      .then(
        () => {
          setMessage('Message sent successfully!');
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 5000);
        },
        (error) => {
          setMessage(`Failed to send message: ${error.text}`);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 5000);
        }
      );
      
    e.target.reset();
  };

  return (
    <section id='contacts' className='bg-primary pt-16 pb-8 px-5 flex flex-col items-center text-white font-bold'>
      <h1 className='text-4xl border-b-4 border-secondary w-[150px]'>Contacts</h1>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex flex-col w-full md:w-1/2 p-10'>
          <p className='py-2 text-2xl'>If you want to discuss more in detail, please contact me...</p>
          <p className='p-2 text-xl'>
            <span className='px-3'>Email:</span>
            <a href='mailto:akarul2100@gmail.com' className='underline'>
              akarul2100@gmail.com
            </a>
          </p>
          <p className='p-2 text-xl'>
            <span className='px-3'>Mobile:</span>
            <a href='tel:+918072663220' className='underline'>
              +91 8072663220
            </a>
          </p>
          <p className='mt-5 text-center md:text-xl'>You can write a message here...</p>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 py-10'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-xl'>Name</label>
              <input type="text" id='name' name="user_name" className='p-2 rounded-md text-black' required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-xl'>Email</label>
              <input type="email" id='email' name="user_email" className='p-2 rounded-md text-black' required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='message' className='text-xl'>Message</label>
              <textarea id='message' name="message" className='p-2 rounded-md h-[130px] text-black' required />
            </div>
            <input type='submit' value='Send' className='bg-secondary text-white py-2 px-4 rounded-md cursor-pointer' />
          </form>
          {showMessage && (
            <div className='mt-4 text-center text-lg'>
              {message}
            </div>
          )}
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          {/* <img src={contactImg} alt='Contact' className='w-full' /> */}
          <Lottie loop={true} animationData={contact} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import React from 'react';
import Lottie from 'lottie-react';
import about from './assets/About1.json';

const About = () => {
    return (
        <section id='about' className='flex flex-col md:flex-row bg-secondary px-6 md:px-16 text-white py-16 items-center'>
            <div className='md:w-1/2 flex justify-center mb-8 md:mb-0'>
                <Lottie loop={true} animationData={about} className='max-w-[450px] w-full' />
            </div>

            <div className='md:w-1/2 flex flex-col justify-center space-y-6'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl sm:text-4xl border-b-4 border-primary mb-4 w-fit font-bold'>About Me</h2>
                    <p className='text-base sm:text-lg text-gray-200 leading-relaxed'>
                        I am a Frontend Software Engineer with <span className='font-semibold text-white'>2+ years of experience</span> building scalable, high-performance web applications using <span className='text-cyan-300 font-semibold'>React.js, Next.js, and TypeScript</span>.
                    </p>
                    <p className='text-base sm:text-lg text-gray-200 leading-relaxed mt-3'>
                        Currently engineering communication features and web platforms at <span className='font-semibold text-white'>TeleCMI Technologies</span>, specializing in server-side rendering, component-based architecture, centralized state management (Zustand, Redux), and real-time audio/video & messaging systems (LiveKit, WebSockets).
                    </p>
                </div>

                <div className='flex flex-col'>
                    <h2 className='text-3xl sm:text-4xl border-b-4 border-primary mb-4 w-fit font-bold'>My Journey</h2>
                    <p className='text-base sm:text-lg text-gray-200 leading-relaxed'>
                        Starting with a degree in Computer Applications (BCA) and foundational experience in cross-functional team leadership, I transitioned into full-time software engineering driven by deep curiosity for web technologies and interactive product architecture.
                    </p>
                    <p className='text-base sm:text-lg text-gray-200 leading-relaxed mt-3'>
                        I have delivered production-grade features including a drag-and-drop IVR Call Flow Builder, LiveKit-based video calling, multi-factor auth (Email OTP, TOTP, OAuth 2.0), and achieved significant Core Web Vitals optimizations (+35% LCP, +28% FCP).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
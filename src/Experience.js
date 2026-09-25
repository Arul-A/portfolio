import React from 'react';
import Lottie from 'lottie-react';
import experience from './assets/Experience.json';

const WorkExperience = () => {
    return (
        <section id='experience' className='py-16 px-6 md:px-16 bg-secondary text-white'>
            <div className='flex justify-center mb-12'>
                <h2 className='text-3xl sm:text-4xl font-bold border-b-4 border-primary pb-1 text-center'>
                    Work Experience
                </h2>
            </div>

            <div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
                <div className='w-full lg:w-3/5 space-y-8'>
                    {/* TeleCMI Experience */}
                    <div className='bg-primary/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10'>
                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 border-b border-white/10 pb-4'>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>Frontend Software Engineer</h3>
                                <p className='text-cyan-300 font-semibold text-lg'>TeleCMI Technologies Pvt Ltd</p>
                            </div>
                            <span className='inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full w-fit'>
                                Sep 2024 – Present | Villupuram, India
                            </span>
                        </div>

                        <ul className='space-y-3 text-gray-200 text-sm sm:text-base'>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Call Flow Builder:</strong> Architected a drag-and-drop Call Flow Builder (React, TypeScript, Zustand) for Piopiy, empowering customers to self-serve IVR, AI voice agent, and PSTN routing configurations without engineering overhead.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Centralized State Architecture:</strong> Implemented Zustand state management across deeply nested drag-and-drop components, eliminating prop drilling and boosting state update efficiency.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Real-time Audio/Video Calling:</strong> Engineered communication capabilities using Connly SDK & Connly Video SDK (LiveKit), managing participant lifecycle, media track sync, reconnection logic, and CDN-backed media across React Native and Electron.js.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Authentication & Security:</strong> Implemented secure authentication with Email OTP, TOTP, and OAuth 2.0 (Google & GitHub Sign-In) across customer-facing and admin suites.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Push Notification System:</strong> Built an offline-capable push notification pipeline via Firebase Cloud Messaging (FCM) with Redis-backed state sync across multi-device sessions.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Performance & Web Vitals:</strong> Boosted Core Web Vitals (LCP +35%, FCP +28%) and organic search traffic (+20%) through code splitting, route-level lazy loading, and asset optimization.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-cyan-400 font-bold mt-1'>▹</span>
                                <span><strong>Agile Leadership:</strong> Worked in 1–2 week Agile/Scrum sprints with strict PR code reviews, and mentored a junior developer into joint ownership of the Piopiy/Connly codebase.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Deccan I Services Experience */}
                    <div className='bg-primary/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10'>
                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 border-b border-white/10 pb-4'>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>Financial Processor / Group Leader</h3>
                                <p className='text-amber-300 font-semibold text-lg'>Deccan I Services Pvt Ltd</p>
                            </div>
                            <span className='inline-block bg-white/10 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full w-fit'>
                                2021 – 2024 | Villupuram, India
                            </span>
                        </div>

                        <ul className='space-y-3 text-gray-200 text-sm sm:text-base'>
                            <li className='flex items-start gap-2'>
                                <span className='text-amber-400 font-bold mt-1'>▹</span>
                                <span>Conducted US healthcare eligibility verification and customer issue resolution across voice, chat, and email channels.</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-amber-400 font-bold mt-1'>▹</span>
                                <span>Led and audited a team of 8 members as Group Leader, training team members and achieving quality assurance and target metrics with 100% accuracy.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full lg:w-2/5 flex justify-center items-center self-center my-auto'>
                    <Lottie
                        loop
                        animationData={experience}
                        className='w-full max-w-[450px] max-h-[500px] object-contain'
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

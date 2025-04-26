import React from 'react';
import Lottie from 'lottie-react';
import experience from './assets/Experience.json';

const WorkExperience = () => {
    return (
        <section id='experience' className='py-10 px-5 bg-secondary text-white'>
            <div className='flex justify-center mb-8'>
                <h2 className='text-4xl font-bold border-b-4 border-primary inline-block'>Work Experience</h2>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-8'>
                <div className='mb-10 md:w-1/2'>
                    {/* <h3 className='text-2xl mb-2 font-semibold'>Financial Processor</h3>
                    <p className='text-lg mb-4'>Deccan I Services Pvt Ltd, Villupuram | 2021 - Present</p>

                    <ul className='list-disc ml-5 mb-4'>
                        <li className='mb-2'>
                            <strong>Data Entry Specialist:</strong> Entered data into various systems and databases, ensuring accuracy and completeness. Conducted quality checks on data to ensure precision.
                        </li>
                        <li className='mb-2'>
                            <strong>Voice Process Associate:</strong> Provided comprehensive customer support through chat, inbound calls, and email. Managed multiple customer inquiries simultaneously, delivering high-quality service.
                        </li>
                        <li className='mb-2'>
                            <strong>Auditor:</strong> Supervised and managed a team of data entry specialists. Provided training, guidance, and support to ensure team efficiency and accuracy.
                        </li>
                        <li className='mb-2'>
                            <strong>Group Leader:</strong> Led a team of 8 members, providing guidance and instructions. Achieved team targets with 100% accuracy.
                        </li>
                    </ul> */}

                    {/* <h4 className='text-2xl mb-2 font-semibold'>Key Skills Developed</h4>
                    <ul className='list-disc ml-5'>
                        <li className='mb-2'>Problem-solving and troubleshooting</li>
                        <li className='mb-2'>Effective communication and teamwork</li>
                        <li className='mb-2'>Attention to detail and quality assurance</li>
                        <li className='mb-2'>Project and team management</li>
                    </ul> */}

                    <h3 className='text-2xl mb-2 font-semibold'>Professional Experience</h3>

                    <p className='text-lg mb-4'>Frontend Developer | TeleCMI Communication Pvt Ltd, Villupuram | Sep 2024 - Present</p>
                    <ul className='list-disc ml-5 mb-4'>
                        <li className='mb-2'>
                            Developed and maintained TeleCMI's website using HTML, Bootstrap, Vue.js, Tailwind CSS, and Express.js.
                        </li>
                        <li className='mb-2'>
                            Built a custom blog CMS using React and MongoDB with REST APIs for content management and server-side rendering.
                        </li>
                    </ul>

                    <p className='text-lg mb-4'>Financial Processor | Deccan I Services Pvt Ltd, Villupuram | 2021 - 2024</p>
                    <ul className='list-disc ml-5 mb-4'>
                        <li className='mb-2'>
                            Handled US healthcare eligibility verification via web and calls; provided customer support through chat, calls, and email.
                        </li>
                        <li className='mb-2'>
                            Led a team of 8 as Group Leader and Auditor, ensuring accurate data entry and meeting performance targets consistently.
                        </li>
                    </ul>
                    <h4 className='text-2xl mb-2 font-semibold'>Key Skills Developed</h4>
                    <ul className='list-disc ml-5'>
                        <li className='mb-2'>Frontend Development using React.js, Vue.js, Tailwind CSS, and Bootstrap</li>
                        <li className='mb-2'>REST API development and integration with Express.js and MongoDB</li>
                        <li className='mb-2'>Version control and collaboration using Git and GitHub</li>
                        <li className='mb-2'>Team leadership, task delegation, and performance tracking</li>
                        <li className='mb-2'>Strong problem-solving skills and cross-functional communication</li>
                    </ul>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <Lottie
                        loop
                        animationData={experience}
                        className='w-full h-[600px] object-cover rounded-lg shadow-md'
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

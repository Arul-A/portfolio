import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import About from './About';
import Contacts from './Contacts';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Project from './Project';
import Achievements from './Achievements';
import { Resume } from './Resume';
import Skills from './Skills';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen bg-[#1e2050] text-white">
      <Header />
      <div className="overflow-hidden" data-aos="fade-up">
        <Hero />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <About />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <Skills />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <Experience />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <Project />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <Achievements />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <Resume />
      </div>
      <div className="overflow-hidden" data-aos="fade-up">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;

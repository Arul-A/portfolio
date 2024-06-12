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
import { Resume } from './Resume';
import Skills from './Skills';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="overflow-hidden" data-aos="fade-right">
        <Hero />
      </div>
      <div className="overflow-hidden" data-aos="fade-left">
        <About />
      </div>
      <div className="overflow-hidden" data-aos="fade-right">
        <Skills />
      </div>
      <div className="overflow-hidden" data-aos="fade-left">
        <Experience />
      </div>
      <div className="overflow-hidden" data-aos="fade-right">
        <Project />
      </div>
      <div className="overflow-hidden" data-aos="fade-left">
        <Resume />
      </div>
      <div className="overflow-hidden" data-aos="fade-right">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;

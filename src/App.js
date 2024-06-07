import About from './About';
import './App.css';
import Contacts from './Contacts';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Project from './Project';
import { Resume } from './Resume';
import Skills from './Skills';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Resume />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

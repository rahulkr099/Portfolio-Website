import './App.css';
import About from './components/About';
import Contact from './components/Contact';
// import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTop';
import Skills from './components/Skills';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ParticleBG from './components/ParticleBG';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      offset: -7
    });
}, []); // Empty dependency array ensures it runs once after mount
  return (
    <div className="App">
      <ParticleBG></ParticleBG>
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Experience/> */}
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
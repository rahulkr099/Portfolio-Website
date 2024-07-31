
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ScrollToTopButton from './components/ScrollToTop';
import Skills from './pages/Skills';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ParticleBG from './components/ParticleBG';

function App() {

  return (
    <div>
      <ParticleBG></ParticleBG>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
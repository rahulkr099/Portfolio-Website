import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTop';
import Skills from './components/Skills';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ParticleBG from './components/ParticleBG';

function App() {

  return (
    <div className="App">
      <ParticleBG></ParticleBG>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
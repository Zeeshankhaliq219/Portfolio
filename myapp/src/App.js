import './App.scss';
import About from './components/About';
import Classpic from './components/Classpic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import PorttfolioSection from './components/portfolioSection';


function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <PorttfolioSection />
      <Classpic />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

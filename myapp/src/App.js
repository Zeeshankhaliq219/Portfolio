import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About";
import Classpic from "./components/Classpic";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import PorttfolioSection from "./components/portfolioSection";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <PorttfolioSection />
          <Classpic />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

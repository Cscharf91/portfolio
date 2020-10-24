import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <div className="tech-container">
        <TechStack />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

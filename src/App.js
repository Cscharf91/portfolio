import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <div className="tech-container">
        <TechStack />
      </div>
      <Projects />
    </div>
  );
}

export default App;

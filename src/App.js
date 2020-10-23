import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Other from './components/Other';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <div className="tech-container">
        <TechStack />
        <Other />
      </div>
      <Projects />
    </div>
  );
}

export default App;

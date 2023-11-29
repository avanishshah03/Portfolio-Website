import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;


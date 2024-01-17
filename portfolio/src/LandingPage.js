import React from 'react';
import MainCard from './MainCard';
import About from './About';
import Experiance from './Experiance';
import Projects from './Projects';

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="maincard-container">
        <MainCard />
      </div>
      
      <div className="empty-space"></div>

      <div className="about-container">
        <About />
      </div>
      <br />
      <div className="empty-space"></div>
      <div className="experiance-container">
        <Experiance />
      </div>
      <div className="empty-space"></div>
      <Projects />
    </div>
  );
}

export default LandingPage;

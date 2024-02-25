import React from 'react';

function Projects() {
  // Common button style
  const buttonStyle = {
    background: 'transparent',
    fontSize: '24px',
    padding: '10px',
    border: '2px solid white',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    margin: '0 10px',
    fontFamily: "'Kode Mono', monospace", // Added font-family here
  };

  return (
    <div className="projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <section id="projects">
        {/* Your existing content */}
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {/* Resume link button */}
        <button
          style={buttonStyle}
          onClick={() => {
            window.open('https://drive.google.com/file/d/1L8Z0kqaAFyMOCkaJ8JLVOIeqowTI-rPZ/view?usp=sharing', '_blank');
          }}
        >
          View Resume
        </button>

        {/* GitHub link button */}
        <button
          style={buttonStyle}
          onClick={() => {
            window.open('https://github.com/ritwikgoel', '_blank');
          }}
        >
          GitHub Profile
        </button>

        {/* LinkedIn link button */}
        <button
          style={buttonStyle}
          onClick={() => {
            window.open('https://www.linkedin.com/in/ritwikgoel/', '_blank');
          }}
        >
          LinkedIn
        </button>
      </div>

      <p>Made with love</p>
    </div>
  );
}

export default Projects;

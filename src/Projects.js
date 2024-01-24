import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <section id="projects">
        {/* Your existing content */}
      </section>

      {/* Add the transparent and big resume link button */}
      <button
        style={{
          background: 'transparent',
          fontSize: '24px',
          padding: '10px',
          border: '2px solid white',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={() => {
          // Replace 'your_resume_link' with the actual link to your resume
          window.open('public/Resume-Ritwik Goel.pdf', '_blank');
        }}
      >
        View Resume
      </button>
    </div>
  );
}

export default Projects;

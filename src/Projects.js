import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <section id="projects">
        {/* Your existing content */}
      </section>

      {/* Resume link button */}
      <button
        style={{
          background: 'transparent',
          fontSize: '24px',
          padding: '10px',
          border: '2px solid white',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
          marginRight: '10px', // Add margin to separate buttons
        }}
        onClick={() => {
          // Replace 'google_docs_viewer_url' with the Google Docs Viewer URL to your resume PDF
          window.open('https://docs.google.com/viewer?url=https://github.com/ritwikgoel/portfolio/raw/main/public/Resume-Ritwik%20Goel.pdf', '_blank');
        }}
      >
        View Resume
      </button>

      {/* GitHub link button */}
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
          // Replace 'github_link' with the actual link to your GitHub profile
          window.open('https://github.com/ritwikgoel', '_blank');
        }}
      >
        GitHub Profile
      </button>
      <p>Made with love ( in a day )</p>
    </div>
  );
}

export default Projects;

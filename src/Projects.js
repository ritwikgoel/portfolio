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
          // Replace 'google_docs_viewer_url' with the Google Docs Viewer URL to your resume PDF
          window.open('https://docs.google.com/viewer?url=https://github.com/ritwikgoel/portfolio/raw/main/public/Resume-Ritwik%20Goel.pdf', '_blank');
        }}
      >
        View Resume
      </button>
    </div>
  );
}

export default Projects;

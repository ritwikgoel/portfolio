// SmoothScrollLink.jsx
import React from 'react';

function SmoothScrollLink({ targetId, children }) {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
        duration: 2000, // Adjust the duration in milliseconds
      });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={scrollToTarget}>
      {children}
    </a>
  );
}

export default SmoothScrollLink;

import React, { useState, useRef } from 'react';
import Navigator from './Navigator';

function MainCard() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="maincard">
      <h1>Ritwik Goel</h1>
      <h3>Student @ Columbia University</h3>
      <h5>
        I build user-friendly software with a keen eye for detail, ensuring a
        <br />
        seamless experience across different platforms and applications.
      </h5>
      <button onClick={toggleMusic}>
        {isMusicPlaying ? '🔇' : '   🎵   '}
      </button>
      <audio ref={audioRef} src="public/bg.mp3" loop />
      <Navigator />
    </div>
  );
}

export default MainCard;

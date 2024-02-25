import React, { useState, useRef } from 'react';
import Navigator from './Navigator';

function MainCard() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      console.log("Audio Source:", audioElement.src);
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
      <h3>Grad Student @ Columbia University</h3>
      <h5>
        I build user-friendly software with a keen eye for detail, ensuring a
        <br />
        seamless experience across different platforms and applications.
      </h5>
      <button onClick={toggleMusic} title={isMusicPlaying ? 'Mute' : 'Play Music'}>
  {isMusicPlaying ? '🤫' : '   🔊   '}
</button>
<h3 style={{ color: '#b98bcc' }}>Click on the speaker for the full experience!</h3>
      <audio ref={audioRef} src="https://raw.githubusercontent.com/ritwikgoel/portfolio/main/public/bg.mp3" loop />
      <Navigator />
    </div>
  );
}

export default MainCard;

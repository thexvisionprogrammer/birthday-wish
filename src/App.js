import React, { useState, useEffect } from 'react';
import Heart from './components/Heart';
import BirthdayCard from './components/BirthdayCard';
import './App.css';
import styled from 'styled-components';

function App() {
  const [showCard, setShowCard] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/assets/song1.mp3'));

  useEffect(() => {
    // Configure audio
    audio.loop = true;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleClick = () => {
    setShowCard(true);
    // Try to play music when heart is clicked
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.log('Auto-play prevented. User needs to click music button.');
        setIsPlaying(false);
      });
  };

  const MusicButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: ${isPlaying ? '#ff69b4' : '#ff1493'};
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 1000;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
  `;

  return (
    <div className="App">
      {!showCard ? (
        <Heart onClick={handleClick} />
      ) : (
        <>
          <BirthdayCard />
          <MusicButton onClick={toggleMusic}>
            {isPlaying ? '🔇' : '🎵'}
          </MusicButton>
        </>
      )}
    </div>
  );
}

export default App; 
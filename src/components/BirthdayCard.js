import React from 'react';
import styled, { keyframes } from 'styled-components';

const pop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffd6e7;
  position: relative;
  overflow: hidden;
`;

const FireworkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/firework.gif');
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PhotosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 20px auto;
  gap: 40px;
  padding: 0 20px;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ff69b4;
  animation: ${pop} 2s infinite;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const CakeGif = styled.img`
  width: 300px;
  margin: 20px 0;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
`;

const WishText = styled.h1`
  font-size: 36px;
  color: #ff1493;
  text-align: center;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${pop} 2s infinite;
`;

const BirthdayCard = () => {
  return (
    <CardContainer>
      <FireworkBackground />
      <ContentContainer>
        <PhotosContainer>
          <Photo src="/assets/friend1.jpg" alt="Friend 1" style={{ animationDelay: '0s' }}/>
          <CakeGif src="/assets/image 1.gif" alt="Birthday Cake" />
          <Photo src="/assets/friend2.jpg" alt="Friend 2" style={{ animationDelay: '1s' }}/>
        </PhotosContainer>
        <WishText>Happy Birthday Jain Sakhi ❤️</WishText>
      </ContentContainer>
    </CardContainer>
  );
};

export default BirthdayCard; 
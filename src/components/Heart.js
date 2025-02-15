import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const HeartContainer = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffd6e7;
`;

const HeartEmoji = styled.span`
  font-size: 100px;
  display: inline-block;
  animation: ${pulse} 1.5s infinite;
`;

const ClickText = styled.p`
  font-size: 24px;
  color: #ff69b4;
  margin-top: 10px;
`;

const Heart = ({ onClick }) => {
  return (
    <HeartContainer onClick={onClick}>
      <HeartEmoji>❤️</HeartEmoji>
      <ClickText>Click me baby</ClickText>
    </HeartContainer>
  );
};

export default Heart; 
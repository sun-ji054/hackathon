import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #F2592A;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: #F2592A;
  font-weight: bold;
  font-size: 16px;
`;

const LoadingOverlay = () => {
    return (
        <Overlay>
            <Spinner />
            <Text>로그인 중...</Text>
        </Overlay>
    );
};

export default LoadingOverlay;

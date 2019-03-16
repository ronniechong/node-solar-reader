import styled, { keyframes, css } from 'styled-components';

const buttonKeyframes = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animKeyframe = css`
  animation: ${buttonKeyframes} 2s linear 0s infinite;
`;

export const ButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled.div`
  ${(props) => props.isLoading ? animKeyframe : 'animation: none;'}
  color: ${(props) => props.isLoading ? '#E7ECEF' : '#274C77'};
  font-size: 0;
  line-height: 1;
`;

import styled, { keyframes, css } from 'styled-components';

const iconKeyframesRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-25%);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;

  }
  100% {
    opacity: 0;
    transform: translateX(90%);
  }
`;

const iconKeyframesLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(90%);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;

  }
  100% {
    opacity: 0;
    transform: translateX(-25%);
  }
`;

export const Icon = styled.div`
  animation-name: ${(props) => props.isNegative ? iconKeyframesLeft : iconKeyframesRight};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  color: ${(props) => props.isNegative ? '#E84855' : '#81F495'};
  opacity: 0;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 60px;
`;

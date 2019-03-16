import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 1rem;
  min-height: 25vh;
  box-shadow: 0px 6px 10px 2px rgba(39, 39, 39, 0.65);
`;

export const RefreshIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

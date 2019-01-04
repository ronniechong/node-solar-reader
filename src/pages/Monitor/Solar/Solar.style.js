import styled from 'styled-components';
import {
  LayoutContainer,
  RefreshIcon
} from '../../../common/styles/common.style';

export const Layout = styled.div `
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(LayoutContainer)
`
  background-color: #009FB7;
`;

export const ListItem = styled.div`
  padding: 1.5rem;
  text-align: center;
  min-width: 110px;
`;
export const Direction = styled.div`
  padding: 0;
`;

export const DisplayValue = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
  transition: color ease-in-out 0.5s;
  text-align: center;
  font-size: 1.75rem;
  padding-top: 0.5rem;
`;

export const Timestamp = styled.span`
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  font-size: 0.65rem;
  color: #EFF1F3;
  text-align:center;
`;

export const ButtonRefresh = styled(RefreshIcon)`
line-height: 1;
`;

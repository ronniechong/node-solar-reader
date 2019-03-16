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
  background-color: #A3CEF1;
`;

export const ButtonRefresh = styled(RefreshIcon)
`
  line-height: 1;
`;

export const WeatherContainer = styled.div `
  display: flex;
  flex-direction: column;
`;
export const MainWeather = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const WeatherTemp = styled.div `
  font-size: 2rem;
  padding: 0 0.25rem;
`;

export const WeatherIcon = styled.div `
  padding: 0 0.25rem;
`;

export const SecondaryWeather = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const WeatherDesc = styled.div `
  width: 100%;
  text-align: left;
  font-size: 1.15rem;
`;

export const WeatherMinMax = styled.div `
  width: 100%;
  text-align: left;
  font-size: 1rem;
  color: #696773;
  line-height: 1.5;
`;

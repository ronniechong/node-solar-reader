import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Button from '../../../common/Button/Button';
import { checkData } from '../../../util/helpers';
import {
  Layout,
  Container,
  ButtonRefresh,
  WeatherContainer,
  MainWeather,
  WeatherTemp,
  WeatherIcon,
  SecondaryWeather,
  WeatherDesc,
  WeatherMinMax,
} from './Weather.style';

@inject('weatherStore')
@observer
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.weatherStore.getWeather();
    this.interval = setInterval(this.onSetInterval, process.env.WEATHERREFRESH);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSetInterval() {
    this.props.weatherStore.getWeather();
  }

  onButtonClick() {
    this.props.weatherStore.getWeather();
  }

  renderData() {
    const { main, weather } = this.props.weatherStore.weatherData;
    const iconType = weather[0];
    return {
      temp: Math.round(main.temp),
      tempMin: Math.round(main.temp_min),
      tempMax: Math.round(main.temp_max),
      main: iconType.main,
      description: iconType.description,
      icon: <img src={`http://openweathermap.org/img/w/${iconType.icon}.png`} alt={iconType.description}/>
    }
  }

  renderContent() {
    const { weatherStore } = this.props;
    const data = this.renderData();
    return (
      <React.Fragment>
        <WeatherContainer>
            <MainWeather>
              <WeatherTemp>{Math.round(data.temp)}&deg;C</WeatherTemp>
              <WeatherIcon>{data.icon}</WeatherIcon>
            </MainWeather>
            <SecondaryWeather>
              <WeatherDesc>{data.main}</WeatherDesc>
              <WeatherMinMax>
                Max: {data.tempMax}&deg;C<br/>Min: {data.tempMin}&deg;C
              </WeatherMinMax>
            </SecondaryWeather>
          </WeatherContainer>
          <ButtonRefresh>
            <Button
              onButtonClick={this.onButtonClick}
              isLoading={weatherStore.isLoading}
            />
          </ButtonRefresh>
      </React.Fragment>
    );
  }

  render() {
    const { weatherStore } = this.props;
    const check = checkData(weatherStore.weatherData);
    if (check && check.error) {
      return (
        <Layout>
          <Container>Error loading Weather</Container>
        </Layout>
      );
    }

    return (
      <Layout>
        <Container>
          { check && this.renderContent() }
        </Container>
      </Layout>
    );
  }
}

Weather.propTypes = {
  weatherStore: PropTypes.object,
};

export default Weather;

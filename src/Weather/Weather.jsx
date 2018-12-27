import React from 'react';
import PropTypes from 'prop-types';
import ReloadIcon from '../common/icons/reload.svg';
import { inject, observer } from 'mobx-react';

@inject('weatherStore')
@observer
class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.weatherStore.getWeather();
  }

  onButtonClick() {
    this.props.weatherStore.getWeather();
  }

  render() {
    return (
      <div>
        { JSON.stringify(this.props.weatherStore.weatherData) }
        <button><ReloadIcon/></button>
      </div>
    );
  }
}

Weather.propTypes = {
  weatherStore: PropTypes.object,
};

export default Weather;

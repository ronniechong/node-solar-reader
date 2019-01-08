import { observable, action } from 'mobx';
import axios from 'axios';

class WeatherStore {
  @observable weatherData;
  @observable isLoading;

  constructor() {
    this.weatherData = undefined;
    this.isLoading = false;
  }

  @action async getWeather() {
    this.isLoading = true;
    await axios
      .get(`//${process.env.HOST}:${process.env.PORT}${process.env.WEATHERENDPOINT}`)
      .then(({ data }) => {
        this.weatherData = data;
        this.isLoading = false;
      })
      .catch((e) => {
        this.weatherData = { error: e };
        this.isLoading = false;
      });
  }
}

export default new WeatherStore();

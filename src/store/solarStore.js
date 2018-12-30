import { observable, action } from 'mobx';
import axios from 'axios';

class SolarStore {
  @observable solarData;
  @observable isLoading;

  constructor() {
    this.solarData = undefined;
    this.isLoading = false;
  }

  @action async getSolar() {
    this.isLoading = true;
    try {
      const { data } =  await axios.get(`//${process.env.HOST}:${process.env.PORT}${process.env.DATAENDPOINT}`);
      this.solarData = data;
      this.isLoading = false;
    } catch(e) {
      this.solarData = { error: e };
      this.isLoading = false;
    }
  }
}

export default new SolarStore();

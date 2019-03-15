import { observable, action } from 'mobx';
import app from 'firebase/app';
import axios from 'axios';

class VisualStore {
  @observable visualData;
  @observable isLoading;

  constructor() {
    const config = {
      apiKey: process.env.FIREBASEAPIKEY,
      authDomain: process.env.FIREBASEAUTHDOMAIN,
      databaseURL: process.env.FIREBASEDATABASEURL,
      projectId: process.env.FIREBASEPROJECTID,
      storageBucket: process.env.FIREBASESTORAGEBUCKET,
      messagingSenderId: process.env.FIREBASEMSGSENDERID,
    };

    this.firebase = app;
    this.firebase.initializeApp(config);
    console.log(this.firebase);
    this.visualData = undefined;
    this.isLoading = false;
  }

  @action async getVisual() {
    this.isLoading = true;
    this.firebase.database().ref();
    // await axios
    //   .get(`//${process.env.HOST}:${process.env.PORT}${process.env.DATAENDPOINT}`)
    //   .then(({ data }) => {
    //     this.solarData = data;
    //     this.isLoading = false;
    //   })
    //   .catch((e) => {
    //     this.solarData = { error: e };
    //     this.isLoading = false;
    //   })
  }
}

export default new VisualStore();

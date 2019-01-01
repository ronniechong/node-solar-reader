require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const nodeSchedule = require('node-schedule');
const Firebase = require('./firebase');
const app = express();
const port = process.env.PORT || 1337;

const config = {
  apiKey: process.env.FIREBASEAPIKEY,
  authDomain: process.env.FIREBASEAUTHDOMAIN,
  databaseURL: process.env.FIREBASEDATABASEURL,
  projectId: process.env.FIREBASEPROJECTID,
  storageBucket: process.env.FIREBASESTORAGEBUCKET,
  messagingSenderId: process.env.FIREBASEMSGSENDERID,
};

const firebase = new Firebase(config);

app.use(express.static(path.join(__dirname + '/../app')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const getData = async () => {
  try {
    return await axios.get(process.env.DATAURL);
  } catch (error) {
    console.error(error);
  }
}

const getWeather = async () => {
  const apiKey = process.env.WEATHERAPI;
  const location = process.env.WEATHERLOCATION;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
}

const recordValue = async ({ data }) => {
  const { Head, Body } = data;
  const { Site } = Body.Data;
  const values = {
    generated: (Site.P_PV === null) ? 0 : Site.P_PV,
    grid: (Site.P_Grid === null) ? 0 : Site.P_Grid,
    usage: (Site.P_Load === null) ? 0 : Site.P_Load,
  };
  return await firebase.setValue(Head.Timestamp, values);
};

const authUser = async () => {
  return await firebase.authUser(process.env.FIREBASESIGNINEMAIL, process.env.FIREBASESIGNINPASSWORD);
}

// Routes
app.get(process.env.DATAENDPOINT, async (req, res) => {
  try {
    const { data } = await getData();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  } catch(e) {
    res.send(JSON.stringify({ error: e }));
  }
});

app.get(process.env.WEATHERENDPOINT, async (req, res) => {
  try {
    const { data } = await getWeather();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  } catch(e) {
    res.send(JSON.stringify({ error: e }));
  }
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../app/index.html'));
});
app.listen(port, () => console.log(`Server running on port ${port}!`));

// Schedule
const schedule = nodeSchedule.scheduleJob(process.env.SCHEDULE, () => {
  const user = firebase.getUser();
  const getAndSetData = () => {
    getData()
      .then(recordValue)
      .then((v) => {
        console.info('Capture complete:', v.id);
      })
      .catch((e) =>  console.error('Error', e));
  }

  if (user) {
    getAndSetData();
  } else {
    authUser()
    .then(getAndSetData);
  }
});


// authUser()
//   .then(getData)
//   .then(recordValue)
//   .then((v) => {
//     console.info('Capture complete:', v.id);
//   })
//   .catch((e) =>  console.error('Error', e));

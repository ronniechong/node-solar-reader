const express = require('express');
const axios = require('axios');
const path = require('path');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 1337;

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

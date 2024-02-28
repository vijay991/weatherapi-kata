const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const WeatherController = require('../Weather/src/controllers/WeatherController');
const WeatherService = require('../Weather/src/services/WeatherService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const weatherService = new WeatherService(process.env.WEATHER_API_API_KEY);
const weatherController = new WeatherController(weatherService);

app.get('/weather/zip/:zipcode', weatherController.getWeatherByZipcode.bind(weatherController));
app.get('/weather/city/:city', weatherController.getWeatherByCity.bind(weatherController));
app.get('/weather/country/:country', weatherController.getWeatherByCountry.bind(weatherController));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

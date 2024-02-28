const request = require('supertest');
const express = require('express');
const WeatherController = require('../controllers/WeatherController');
const WeatherService = require('../services/WeatherService');

jest.mock('../services/WeatherService');

describe('WeatherController Integration Test', () => {
  let app;
  let weatherController;
  let mockWeatherService;

  let mockWeatherData = {
    location: {
      name: 'Schenectady',
      region: 'New York',
      country: 'USA'
    },
    current: {
      temp_c: 20,
      condition: {
        text: 'Cloudy'
      }
    }
  }

  beforeEach(() => {
    app = express();
    mockWeatherService = new WeatherService();
    weatherController = new WeatherController(mockWeatherService);
  });

  it('return weather data for a given zipcode', async () => {
    const zipcode = '12345';
    app.get('/weather/zip/:zipcode', weatherController.getWeatherByZipcode.bind(weatherController));
    mockWeatherService.getWeatherByZipcode.mockResolvedValue(mockWeatherData);
    const response = await request(app).get(`/weather/zip/${zipcode}`);
    expect(response.status).toBe(200);
    expect(response.body.location.name).toBe('Schenectady');
  });

  it('return weather data for a given city', async ()=>{
    const city = 'Schenectady'
    app.get('/weather/city/:city', weatherController.getWeatherByCity.bind(weatherController));
    mockWeatherService.getWeatherByCity.mockResolvedValue(mockWeatherData);
    const response = await request(app).get(`/weather/city/${city}`);
    expect(response.status).toBe(200);
    expect(response.body.location.name).toBe('Schenectady');
  });

  it('return weather data for a given country', async ()=>{
    const country = 'USA'
    app.get('/weather/country/:country', weatherController.getWeatherByCountry.bind(weatherController));
    mockWeatherService.getWeatherByCountry.mockResolvedValue(mockWeatherData);
    const response = await request(app).get(`/weather/country/${country}`);
    expect(response.status).toBe(200);
    expect(response.body.location.country).toBe('USA');
  });
});

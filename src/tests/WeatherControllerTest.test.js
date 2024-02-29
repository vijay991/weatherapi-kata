const request = require('supertest');
const express = require('express');
const WeatherController = require('../controllers/WeatherController');
const WeatherService = require('../services/WeatherService');
const mockWeatherData = require('./mocks/mockWeatherData')

jest.mock('../services/WeatherService');

describe('WeatherController Integration Test', () => {
  let app
  let weatherService
  let weatherController

  beforeEach(()=>{
    app = express()
    weatherService = new WeatherService()
    weatherController = new WeatherController(weatherService)
  })

  it('return weather data for a given zipcode', async () => {
    const zipcode = '12345';
    app.get('/weather/zipcode/:zipcode', weatherController.getWeatherByZipcode.bind(weatherController))
    weatherService.getWeatherByZipcode.mockResolvedValue(mockWeatherData)
    const weatheData = await request(app).get(`/weather/zipcode/${zipcode}`)
    expect(weatheData.status).toBe(200)
    expect(weatheData.body.location.name).toBe('Schenectady')
  })

  it('return weather data for a given city', async () => {
    const city = 'Schenectady'
    app.get('/weather/city/:city', weatherController.getWeatherByCity.bind(weatherController))
    weatherService.getWeatherByCity.mockResolvedValue(mockWeatherData)
    const weatheData = await request(app).get(`/weather/city/${city}`)
    expect(weatheData.status).toBe(200)
    expect(weatheData.body.location.name).toBe('Schenectady')
  })

  it('return weather data for a given country', async() => {
    const country = 'USA'
    app.get('/weather/country/:country', weatherController.getWeatherByCountry.bind(weatherController))
    weatherService.getWeatherByCountry.mockResolvedValue(mockWeatherData)
    const weatheData = await request(app).get(`/weather/country/${country}`)
    expect(weatheData.status).toBe(200)
    expect(weatheData.body.location.country).toEqual('USA')
  })
});

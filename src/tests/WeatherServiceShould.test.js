const axios = require('axios');
const WeatherService = require('../services/WeatherService');
const mockWeatherData = require('./mocks/mockWeatherData')

jest.mock('axios'); 

describe('WeatherService', () => {
    let weatherService
    const BASE_URL = 'https://api.weatherapi.com/v1/current.json?key=mock_api_key'

    beforeEach(()=>{
        axios.get.mockResolvedValue({data: mockWeatherData})
        weatherService = new WeatherService('mock_api_key');
    })

    it('should call weather api for a given zipcode to fetch weather data', async() => {
        const zipcode = '12345'
        const weatherData = await weatherService.getWeatherByZipcode(zipcode)
        expect(weatherData).toEqual(mockWeatherData)
        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}&q=${zipcode}`)         
    })

    it('should call weather api for a given city to fetch weather data', async() => {
        const city = 'Schenectady'
        const weatheData = await weatherService.getWeatherByCity(city)
        expect(weatheData).toEqual(mockWeatherData)
        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}&q=${city}`)         
    })

    it('should call weather api for a given country to fetch weather data', async() => {
        const country = 'USA'
        const weatheData = await weatherService.getWeatherByCountry(country)
        expect(weatheData).toEqual(mockWeatherData)
        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}&q=${country}`)         
    })
});

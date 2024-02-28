const axios = require('axios');
const WeatherService = require('../services/WeatherService');

jest.mock('axios'); 

describe('WeatherService', () => {

  const mockWeatherData = {
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
  };

  let weatherService

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockWeatherData });
    weatherService = new WeatherService('mock_api_key');
  });

  it('should fetch weather data for a given zipcode', async () => {
    const zipcode = '12345';
    const weatherData = await weatherService.getWeatherByZipcode(zipcode);
    expect(weatherData).toEqual(mockWeatherData);
    expect(axios.get).toHaveBeenCalledWith(`https://api.weatherapi.com/v1/current.json?key=mock_api_key&q=${zipcode}`);
  });

  it('should fetch weather data for a given city', async ()=>{
    const city = 'Schenectady';
    const weatherData = await weatherService.getWeatherByCity(city);
    expect(weatherData).toEqual(mockWeatherData);
    expect(axios.get).toHaveBeenCalledWith(`https://api.weatherapi.com/v1/current.json?key=mock_api_key&q=${city}`); 
  });

  it('should fetch weather data for a given country', async ()=>{
    const country = 'USA';
    const weatherData = await weatherService.getWeatherByCountry(country);
    expect(weatherData).toEqual(mockWeatherData);
    expect(axios.get).toHaveBeenCalledWith(`https://api.weatherapi.com/v1/current.json?key=mock_api_key&q=${country}`); 
  });
});

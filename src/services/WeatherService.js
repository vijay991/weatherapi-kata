const axios = require('axios');

class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getWeatherByZipcode(zipcode) {
    try {
      const externalApiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${zipcode}`;
      const response = await axios.get(externalApiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }

  async getWeatherByCity(city) {
    try {      
      const externalApiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
      const response = await axios.get(externalApiUrl);   
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');      
    }
  }

  async getWeatherByCountry(country){
    try {      
      const externalApiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${country}`;
      const response = await axios.get(externalApiUrl);   
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');      
    }
  }
}

module.exports = WeatherService;

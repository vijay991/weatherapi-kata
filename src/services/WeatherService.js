const axios = require('axios');

class WeatherService {
    constructor(apiKey){
        this.apiKey = apiKey
    }

    BASE_URL = 'https://api.weatherapi.com/v1/current.json?'

    async getWeatherByZipcode(zipcode){
        try {
            const weatherApiUrl = `${this.BASE_URL}key=${this.apiKey}&q=${zipcode}`
            const weatherData = await axios.get(weatherApiUrl)
            return weatherData.data
        } catch (error) {
            throw new Error('Faild to fetch weather data')
        }
    }

    async getWeatherByCity(city){
        try {
            const weatherApiUrl = `${this.BASE_URL}key=${this.apiKey}&q=${city}`
            const weatheData = await axios.get(weatherApiUrl)
            return weatheData.data
        } catch (error) {
            throw new Error('Failed to fetch weather data')
        }
    }

    async getWeatherByCountry(country){
        try {
            const weatherApiUrl = `${this.BASE_URL}key=${this.apiKey}&q=${country}`
            const weatheData = await axios.get(weatherApiUrl)
            return weatheData.data
        } catch (error) {
            throw new Error('Failed to fetch weather data')
        }
    }
}

module.exports = WeatherService;

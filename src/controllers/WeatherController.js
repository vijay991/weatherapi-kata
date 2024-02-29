class WeatherController {
    constructor(weatherService){
        this.weatherService = weatherService
    }

    async getWeatherByZipcode(req, res, next){
        try {
            const zipcode = req.params.zipcode
            const weatherData = await this.weatherService.getWeatherByZipcode(zipcode)
            res.json(weatherData)
        } catch (error) {
            next(error)
        }
    }

    async getWeatherByCity(req, res, next){
        try {
            const city = req.params.city
            const weatheData = await this.weatherService.getWeatherByCity(city)
            res.json(weatheData)
        } catch (error) {
            next(error)
        }
    }
    
    async getWeatherByCountry(req, res, next){
        try {
            const country = req.params.country
            const weatheData = await this.weatherService.getWeatherByCountry(country)
            res.json(weatheData)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = WeatherController;
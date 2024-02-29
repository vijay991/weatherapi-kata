const WeatherController = require('../controllers/WeatherController');
const WeatherService = require('../services/WeatherService');

describe('WeatherController', () => {
    let weatherController
    let weatherService
    const res = { json: jest.fn() }
    const next  = jest.fn()

    beforeEach(()=>{
        weatherService = new WeatherService()
        weatherController = new WeatherController(weatherService)
    })

    it('should call weather service getWeatherByZipcode with correct zipcode', async() => {
        const req = { params: { zipcode:'12345'} }
        weatherService.getWeatherByZipcode = jest.fn().mockResolvedValue({})
        await weatherController.getWeatherByZipcode(req,res,next)
        expect(weatherService.getWeatherByZipcode).toHaveBeenCalledWith('12345')
    })

    it('should call weather serive getWeatherByCity with correct city', async() =>{
        const req = { params: { city: 'Schenectady'} }
        weatherService.getWeatherByCity = jest.fn().mockResolvedValue({})
        await weatherController.getWeatherByCity(req, res, next)
        expect(weatherService.getWeatherByCity).toHaveBeenCalledWith('Schenectady')
    })

    it('should call weather service getWeatherByCountry with correct country', async() => {
        const req = { params: {country: 'USA'} }
        weatherService.getWeatherByCountry = jest.fn().mockResolvedValue({})
        await weatherController.getWeatherByCountry(req, res, next)
        expect(weatherService.getWeatherByCountry).toHaveBeenCalledWith('USA')
    })
});

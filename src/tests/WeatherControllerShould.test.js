const WeatherController = require('../controllers/WeatherController');
const WeatherService = require('../services/WeatherService');

describe('WeatherController', () => {
  let mockWeatherService;
  let weatherController;

  const res = { json: jest.fn() };
  const next = jest.fn();

  beforeEach(() => {
    mockWeatherService = new WeatherService();
    weatherController = new WeatherController(mockWeatherService);
  });

  it('should call weatherService.getWeatherByZipcode with correct zipcode', async () => {
    mockWeatherService.getWeatherByZipcode = jest.fn().mockResolvedValue({});
    const req = { params: { zipcode: '12345' } };
    await weatherController.getWeatherByZipcode(req, res, next);
    expect(mockWeatherService.getWeatherByZipcode).toHaveBeenCalledWith('12345');
  });

  it('should call weatherService.getWeatherByCity with correct city name', async () => {
    mockWeatherService.getWeatherByCity = jest.fn().mockResolvedValue({});
    const req = { params: { city: 'Delhi' } };
    await weatherController.getWeatherByCity(req, res, next);
    expect(mockWeatherService.getWeatherByCity).toHaveBeenCalledWith('Delhi');
  });

  it('should call weatherService.getWeatherByCountry with correct country name', async () => {
    mockWeatherService.getWeatherByCountry = jest.fn().mockResolvedValue({});
    const req = { params: { country: 'USA' } };
    await weatherController.getWeatherByCountry(req, res, next);
    expect(mockWeatherService.getWeatherByCountry).toHaveBeenCalledWith('USA');
  });
});

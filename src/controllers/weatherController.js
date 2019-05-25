import weatherService from "../services/weatherService";

const weatherController = {
  fetchCurrentWeather: async (req, res, next) => {
    const city = req.query.city;
    const currentWeather = await weatherService.getCurrentWeather(city, next);
    res.json(currentWeather)
  }
};

export default weatherController;
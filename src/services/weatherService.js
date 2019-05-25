import webRequest from "../utilities/webRequest";

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather";

const weatherService = {
  getCurrentWeather: (city, next) =>
    new Promise((resolve, reject) => {
      const url = weatherUrl + `?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}`;
      webRequest
        .get(url)
        .then(res => {
          resolve(res);
        })
        .catch(next);
    })
};

export default weatherService;

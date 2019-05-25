import Cloud from "../components/WeatherIcons/Cloud";
import Moon from "../components/WeatherIcons/Moon";
import MoonCloud from "../components/WeatherIcons/MoonCloud";
import MoonRainCloud from "../components/WeatherIcons/MoonRainCloud";
import RainCloud from "../components/WeatherIcons/RainCloud";
import Sun from "../components/WeatherIcons/Sun";
import SunCloud from "../components/WeatherIcons/SunCloud";
import SunRainCloud from "../components/WeatherIcons/SunRainCloud";

const iconMapper = iconCode => {
  switch (iconCode) {
    case "01d":
      console.log("hmmmm")
      return Sun;
    case "01n":
      return Moon;
    case "02d":
      return SunCloud;
    case "02n":
      return MoonCloud;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return Cloud;
    case "09d":
    case "09n":
      return RainCloud;
    case "10d":
      return SunRainCloud;
    case "10n":
      return MoonRainCloud;
    default:
      return Cloud;
  }
};

export default iconMapper;

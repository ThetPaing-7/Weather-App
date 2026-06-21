// import the images of weathers conditions
import clearDay from "./asset/icons/clear-day.png";
import clearNight from "./asset/icons/clear-night.png";
import cloudy from "./asset/icons/cloudy.png";
import fog from "./asset/icons/fog.png";
import hail from "./asset/icons/hail.png";
import partlyCloudyDay from "./asset/icons/partly-cloudy-day.png";
import partlyCloudyNight from "./asset/icons/partly-cloudy-night.png";
import rain from "./asset/icons/rain.png";
import rainSnow from "./asset/icons/rain-snow.png";
import rainSnowShowersDay from "./asset/icons/rain-snow-showers-day.png";
import rainSnowShowersNight from "./asset/icons/rain-snow-showers-night.png";
import showersDay from "./asset/icons/showers-day.png";
import showersNight from "./asset/icons/showers-night.png";
import sleet from "./asset/icons/sleet.png";
import snow from "./asset/icons/snow.png";
import snowShowersDay from "./asset/icons/snow-showers-day.png";
import snowShowersNight from "./asset/icons/snow-showers-night.png";
import thunder from "./asset/icons/thunder.png";
import thunderRain from "./asset/icons/thunder-rain.png";
import thunderShowersDay from "./asset/icons/thunder-showers-day.png";
import thunderShowersNight from "./asset/icons/thunder-showers-night.png";
import wind from "./asset/icons/wind.png";

// import icon text
import { extract_data } from "./extract_data.js";

export async function get_icons() {
  const weatherIcons = {
    "clear-day": clearDay,
    "clear-night": clearNight,
    cloudy: cloudy,
    fog: fog,
    hail: hail,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    rain: rain,
    "rain-snow": rainSnow,
    "rain-snow-showers-day": rainSnowShowersDay,
    "rain-snow-showers-night": rainSnowShowersNight,
    "showers-day": showersDay,
    "showers-night": showersNight,
    sleet: sleet,
    snow: snow,
    "snow-showers-day": snowShowersDay,
    "snow-showers-night": snowShowersNight,
    thunder: thunder,
    "thunder-rain": thunderRain,
    "thunder-showers-day": thunderShowersDay,
    "thunder-showers-night": thunderShowersNight,
    wind: wind,
  };

  let { icon } = await extract_data();
  return weatherIcons[icon];
}

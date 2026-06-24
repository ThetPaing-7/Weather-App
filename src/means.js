import { extracted_data } from "./extract_data.js";

async function translate() {
  let weather_objects = await extracted_data;

  const { humidity, pressure: air_pressure, uvindex } = weather_objects;

  const humidity_conditions = (humidity) => {
    if (20 < humidity < 40) {
      return "Dry";
    } else if (40 < humidity < 60) {
      return "Comfortable";
    } else if (humidity > 60) {
      return "Humid and Stikcy";
    }
  };

  const air_pressure_conditions = (air_pressure) => {
    if (980 < air_pressure < 1020) {
      return "Normal";
    } else if (air_pressure < 980) {
      return "Lower";
    } else if (air_pressure > 1020) {
      return "High";
    }
  };

  const uvindex_conditions = (uvindex) => {
    if (uvindex < 2) {
      return "Low";
    } else if (3 < uvindex < 5) {
      return "Moderate";
    } else if (6 < uvindex < 6) {
      return "High";
    } else if (8 < uvindex < 10) {
      return "Very High";
    } else if (uvindex > 11) {
      return "Extreme";
    }
  };

  return {
    humidity_conditions: humidity_conditions(humidity),
    air_pressure_conditions: air_pressure_conditions(air_pressure),
    uvindex_conditions: uvindex_conditions(uvindex),
  };
}

export { translate };

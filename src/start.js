import "./styles.css";
import { extract_data } from "./extract_data.js";
import { translate } from "./means.js";
import { get_icons } from "./generate_icons.js";
import { element_factory } from "./element_factory.js";
import { to_celsious } from "./unit_conversion.js";
import get_weather_data from "./get_data.js";
// import { data } from "./get_data.js";

export async function start_page(city) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  let data = get_weather_data(city);
  let extracted_data;
  try {
    extracted_data = await extract_data(data);
  } catch (error) {
    return;
  }

  const {
    this_day,
    address,
    cloudcover,
    conditions,
    datetime,
    description,
    dew,
    feelslike,
    humidity,
    icon,
    moonphase,
    pressure,
    snow,
    snowdepth,
    solarenergy,
    solarradiation,
    source,
    stations,
    sunrise,
    sunset,
    temp,
    uvindex,
    visibility,
    winddir,
    windgust,
    windspeed,
  } = extracted_data;

  const sub_container_size = 6;
  for (let i = 0; i < sub_container_size; i++) {
    let sub_container = element_factory.create({
      class_name: `container_${i + 1}`,
      element_name: "div",
      id: `container_${i + 1}`,
    });
    container.append(sub_container);
  }

  // Grab the container One
  const container_one = document.getElementById("container_1");

  // 1st row left section
  const adddress = element_factory.create({
    element_name: "h3",
    text: address,
  });
  const today = element_factory.create({ element_name: "h2", text: this_day });
  const time = element_factory.create({
    element_name: "h3",
    text: `Time: ${datetime}`,
    id: "datetime",
  });
  const rise = element_factory.create({
    element_name: "h4",
    text: `Sunrise: ${sunrise}`,
  });
  const set = element_factory.create({
    element_name: "h4",
    text: `Sunset: ${sunset}`,
  });
  const src = element_factory.create({
    element_name: "p",
    text: `Source: ${source}`,
  });
  const phase = element_factory.create({
    element_name: "h4",
    text: `Moon phase: ${moonphase}`,
  });
  element_factory.pushElements(container_one, [
    today,
    time,
    adddress,
    rise,
    set,
    phase,
    src,
  ]);

  // 1st row Middle section
  const container_two = document.getElementById("container_2");
  const temperature = element_factory.create({
    element_name: "div",
    id: "temperature",
    text: `${to_celsious(temp)}°C`,
  });
  const feels = element_factory.create({
    element_name: "div",
    text: `Feels like: ${to_celsious(feelslike)}°C`,
  });
  const cloud = element_factory.create({
    element_name: "div",
    id: "clouldCover",
    text: `Cloud Cover: ${cloudcover}`,
  });
  const icons_picture = document.createElement("img");
  const pic = await get_icons();
  console.log(pic);
  icons_picture.src = pic;
  const saturation = element_factory.create({
    element_name: "div",
    text: conditions,
    id: "conditions",
  });
  const des = element_factory.create({
    element_name: "div",
    text: description,
  });
  const dewss = element_factory.create({
    element_name: "div",
    text: `Dew: ${dew}`,
  });
  element_factory.pushElements(container_two, [
    temperature,
    feels,
    icons_picture,
    saturation,
    des,
    dewss,
    cloud,
  ]);

  // 1st Row left section
  const container_three = document.getElementById("container_3");
  const section3_data = [
    snow,
    snowdepth,
    winddir,
    windspeed,
    windgust,
    visibility,
    solarenergy,
    solarradiation,
  ];
  const section3_label = [
    "snow",
    "snowdepth",
    "windir",
    "windspeed",
    "windgust",
    "visibility",
    "solarenergy",
    "solarradiation",
  ];

  for (let i = 0; i < section3_data.length; i++) {
    const element = element_factory.create({
      element_name: "div",
      text: `${section3_label[i]}: ${section3_data[i]}`,
    });
    container_three.append(element);
  }

  // 2nd row left section
  const meanings = await translate();
  const { humidity_conditions, air_pressure_conditions, uvindex_conditions } =
    meanings;

  const container_four = document.getElementById("container_4");
  const humidity_label = element_factory.create({
    element_name: "div",
    text: "Humidity",
    class_name: "card-title",
  });
  const humid = element_factory.create({
    element_name: "div",
    text: humidity,
    class_name: "card-value",
  });
  const humid_means = element_factory.create({
    element_name: "div",
    text: humidity_conditions,
    class_name: "card-status",
  });

  element_factory.pushElements(container_four, [
    humidity_label,
    humid,
    humid_means,
  ]);

  // 2nd row mid section
  const container_five = document.getElementById("container_5");
  const pressure_label = element_factory.create({
    element_name: "div",
    text: "Air Pressure",
    class_name: "card-title",
  });
  const prees = element_factory.create({
    element_name: "div",
    text: pressure,
    class_name: "card-value",
  });
  const pressure_means = element_factory.create({
    element_name: "div",
    text: air_pressure_conditions,
    class_name: "card-status",
  });

  element_factory.pushElements(container_five, [
    pressure_label,
    prees,
    pressure_means,
  ]);

  // 2nd row right section
  const container_six = document.getElementById("container_6");
  const uv_label = element_factory.create({
    element_name: "div",
    text: "Ultraviolet Index",
    class_name: "card-title",
  });
  const uv = element_factory.create({
    element_name: "div",
    text: uvindex,
    class_name: "card-value",
  });
  const uv_means = element_factory.create({
    element_name: "div",
    text: uvindex_conditions,
    class_name: "card-status",
  });

  element_factory.pushElements(container_six, [uv_label, uv, uv_means]);
}

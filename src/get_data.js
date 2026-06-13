export default async function get_weather_data() {
  const reponse = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=HNXLYHWUX2X94UVXXUAFKRCZE",
  );
  return await reponse.json();
}

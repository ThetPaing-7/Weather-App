export default async function get_weather_data(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=HNXLYHWUX2X94UVXXUAFKRCZE`,
    );
    return await response.json();
  } catch (error) {
    const feedback = document.getElementById("feedback_display");
    feedback.textContent = error;
    return error;
  }
}

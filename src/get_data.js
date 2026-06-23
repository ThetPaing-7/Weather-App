// import { get_city } from "./get_city.js";


export default async function get_weather_data(city) {
    try {
        const response = await fetch(
             `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=HNXLYHWUX2X94UVXXUAFKRCZE`
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
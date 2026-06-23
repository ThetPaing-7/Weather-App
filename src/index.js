import { start_page } from "./start.js";
import { render_city_form } from "./get_city.js";
import get_weather_data from "./get_data.js";


export function initialize(){
    render_city_form()

    const search_btn = document.getElementById("search_btn")
    search_btn.addEventListener("click",()=>{
        const textinput = document.getElementById("city")
        const city = textinput.value || "london"
        start_page(city)
    })
}

initialize()

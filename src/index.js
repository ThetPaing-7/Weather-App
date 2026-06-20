import "./styles.css";
import { extract_data } from "./extract_data.js";
import { translate } from "./means.js";
import { get_icons } from "./generate_icons.js";
import { element_factory } from "./element_factory.js";

let data = await translate();

async function start_page(){
    const container = document.getElementById("container")
    let extracted_data = await extract_data()
    const {address,cloudcover,condtions,datetime,description,dew,feelslike,humidity,icon,moonphase,pressure,snow,snowdepth,solarenergy,solarradiation,source,stations,sunrise,sunset,temp,uvindex,visibility,windir,windgust,windspeed} = extracted_data

    const sub_container_size = 6
    for(let i = 0; i < sub_container_size; i++){
        let sub_container = element_factory.create({class_name:`container_${i+1}`,element_name:'div',id:`container_${i+1}`})
        container.append(sub_container)
    }

    // Grab the container One
    const container_one = document.getElementById("container_1")
    const adddress = element_factory.create({element_name :"h2",text:address})
    container_one.append(adddress)
}

start_page()
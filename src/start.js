import "./styles.css";
import { extract_data } from "./extract_data.js";
import { translate } from "./means.js";
import { get_icons } from "./generate_icons.js";
import { element_factory } from "./element_factory.js";
import { to_celsious } from "./unit_conversion.js";

let data = await translate();

export async function start_page(){
    const container = document.getElementById("container")
    let extracted_data = await extract_data()
    console.log(extracted_data)
    const {this_day,address,cloudcover,conditions,datetime,description,dew,feelslike,humidity,icon,moonphase,pressure,snow,snowdepth,solarenergy,solarradiation,source,stations,sunrise,sunset,temp,uvindex,visibility,winddir,windgust,windspeed} = extracted_data

    const sub_container_size = 6
    for(let i = 0; i < sub_container_size; i++){
        let sub_container = element_factory.create({class_name:`container_${i+1}`,element_name:'div',id:`container_${i+1}`})
        container.append(sub_container)
    }

    // Grab the container One
    const container_one = document.getElementById("container_1")
    
    // 1st row left section
    const adddress = element_factory.create({element_name :"h3",text:address})
    const today = element_factory.create({element_name:"h2",text:this_day})
    const time = element_factory.create({element_name:"h3",text:`Time: ${datetime}`,id:"datetime"})
    const rise = element_factory.create({element_name:"h4",text:`Sunrise: ${sunrise}`})
    const set = element_factory.create({element_name:"h4",text:`Sunset: ${sunset}`})
    const src = element_factory.create({element_name:"p",text:`Source: ${source}`})
    const phase = element_factory.create({element_name:"h4",text:`Moon phase: ${moonphase}`})
    element_factory.pushElements(container_one,[today,time,adddress,rise,set,phase,src])

    // 1st row Middle section
    const container_two = document.getElementById("container_2")
    const temperature = element_factory.create({element_name:"div",id:"temperature",text:`${to_celsious(temp)}°C`})
    const feels = element_factory.create({element_name:"div",text:`Feels like: ${to_celsious(feelslike)}°C`})
    const cloud = element_factory.create({element_name:"div",id:"clouldCover",text:`Cloud Cover: ${cloudcover}`})
    const icons_picture = document.createElement("img")
    const pic = await get_icons()
    console.log(pic)
    icons_picture.src = pic
    const saturation= element_factory.create({element_name:"div",text:conditions,id:"conditions"})
    const des = element_factory.create({element_name:"div",text:description})
    element_factory.pushElements(container_two,[temperature,feels,icons_picture,saturation,des,cloud])

    // 1st Row left section
    const container_three = document.getElementById("container_3")
    const section3_data = [snow,snowdepth,winddir,windspeed,windgust,visibility,solarenergy,solarradiation]
    const section3_label = ["snow","snowdepth","windir","windspeed","windgust","visibility","solarenergy","solarradiation"]

    for(let i = 0; i < section3_data.length; i++){
        const element = element_factory.create({element_name:"div",text:`${section3_label[i]}: ${section3_data[i]}`})
        container_three.append(element)
    }
}



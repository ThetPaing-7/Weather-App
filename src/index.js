import "./styles.css";
import { extract_data } from "./extract_data.js";
import { translate } from "./means.js";
import { get_icons } from "./generate_icons.js";

let data = await translate();
console.log(data);
get_icons();

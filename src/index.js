import { start_page } from "./start.js";
import { render_city_form } from "./get_city.js";

export default async function initialize() {
  render_city_form();

  const search_btn = document.getElementById("search_btn");
  search_btn.addEventListener("click", () => {
    const textinput = document.getElementById("city");
    const city = textinput.value;
    const feedback = document.getElementById("feedback_display");
    if (!city) {
      feedback.textContent = "Please enter a city";
    } else {
      feedback.textContent = "";
      start_page(city);
    }
  });
}

initialize();

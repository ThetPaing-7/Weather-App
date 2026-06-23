export function render_city_form() {
        const from_container = document.getElementById("form_container");

        const sub_container = document.createElement("div");
        sub_container.id = "sub-container";

        const label = document.createElement("label");
        label.htmlFor = "city";
        label.textContent = "Please search a city here:";

        const div = document.createElement("div")
        
        const input = document.createElement("input");
        input.type = "text";
        input.name = "city";
        input.id = "city";
        input.placeholder = "Example: Yangon";
        input.required = true;


        const feedback = document.createElement("div");
        feedback.id = "feedback_display";

        const button = document.createElement("button");
        button.id = "search_btn";
        button.textContent = "Search";

        div.append(input,button)

        sub_container.append(label,feedback,div);
        from_container.append(sub_container);
}
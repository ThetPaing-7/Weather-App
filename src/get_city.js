export function get_city(){
    const container = document.getElementById("container")

    const label = document.createElement("label")
    label.setAttribute("for","city")
    label.textContent = "Please search a city here:"

    const input = document.createElement("input")
    input.setAttribute("type","text")
    input.setAttribute("name","city")
    input.setAttribute("id","name")
    input.setAttribute("required","")


    container.append(label,input)
}
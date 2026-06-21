class element_factory{

    constructor(){

    }
    
    static create({class_name="",element_name,id="",text=""}){
        const element = document.createElement(element_name)
        if(id)element.id = id
        if(class_name)element.classList.add(class_name)
        element.textContent = text

        return element
    }

    static pushElements(parentElement,childElement){

        for(let i = 0; i < childElement.length; i++){
            parentElement.append(childElement[i])
        }
    }
}


export {element_factory}
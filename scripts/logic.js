const $respuestas = document.querySelectorAll('.item__respuesta')
const $botones = document.querySelectorAll('.item__click')

let ultimate;

const cleanText = () =>{ //limpia el estilo de visibilidad de todos los p
    $respuestas.forEach(element => {
        element.classList.remove('item__respuesta_activa')
    });
}

const cleanBoton = () =>{ //limpia el estilo de visibilidad de todos los p
    $botones.forEach(element => {
        element.style.setProperty("transform","rotate(0deg)")
    });
}

const rotate =(element) =>{//rota el backgraund del boton
    if(element.style.getPropertyValue("transform") == "rotate(180deg)"){
        cleanBoton()
        element.style.setProperty("transform","rotate(0deg)")
        }else{
        cleanBoton()
        element.style.setProperty("transform","rotate(180deg)")
        }    
}

const action = (element) =>{
    let $padre = element.parentElement
    //aqui va la negrita
    rotate($padre.children[1])
    $padre = $padre.parentElement
    const $action = $padre.children[1]
    if(!($action == ultimate)){//restriccion para evitar bucle en el mismo boton
        cleanText()
    }  
    $action.classList.toggle('item__respuesta_activa')
    ultimate = $action
}

document.addEventListener("click",(e) =>{
    if(e.target.id === "1"){//restriccion para que no modifique otros elementos
    action (e.target) //e target devuelve el objeto al cual se le dio click
    }
})

const $respuestas = document.querySelectorAll('.item__respuesta')
const $botones = document.querySelectorAll('.item__click')
const $preguntas = document.querySelectorAll('.item__pregunta')

let ultimate
let repeat

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

const cleanQuestion = () => {//limpia las negritas de las preguntas
    $preguntas.forEach(element => {
        element.style.fontWeight = "";
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
const negrita =(element)=>{

    (element == repeat)?element.style.fontWeight = "":
    element.style.fontWeight = "bolder";
}

const action = (element) =>{//ejecucion principal
    let $padre = element.parentElement
    cleanQuestion()
    negrita($padre.children[0])
    rotate($padre.children[1])
    repeat = $padre.children[0]
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
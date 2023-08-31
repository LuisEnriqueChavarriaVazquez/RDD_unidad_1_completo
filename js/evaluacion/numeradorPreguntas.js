/*
 * Las preguntas son numeradas una vez que ya estan en el
 * DOM, de modo que no importa el tipo, sino solo la cantidad.
 */

function numeradorDePreguntas(){
    let numeracionPreguntaElements = document.getElementsByClassName('numeracionPregunta');
    let numeracionPreguntaElementsArr = [...numeracionPreguntaElements];
    
    for(z = 0; z < numeracionPreguntaElementsArr.length; z++){
        numeracionPreguntaElementsArr[z].innerHTML = "Pregunta " + (z + 1);
    }
}

numeradorDePreguntas();
//Aqui solo se declaran las variables que se usaran en los demas documentos para poder sumar puntajes

//Puntaje del usuario
let puntajeTotal = 0;
let preguntasContestadasTotal = 0;

//Elementos para conteo de puntaje
let barraPreguntas = document.getElementById('barraPreguntas');
let contadorPreguntas = document.getElementById('contadorPreguntas');
let contadorPreguntasRespondidas = document.getElementById('contadorPreguntasRespondidas');

let barraPreguntas2 = document.getElementById('barraPreguntas2');
let contadorPreguntas2 = document.getElementById('contadorPreguntas2');
let contadorPreguntasRespondidas2 = document.getElementById('contadorPreguntasRespondidas2');

//Cuando terminamos la pregunta final, entonces sacamos la califacion
function getGrade(){
    if(preguntasContestadasTotal == 20){
        //Calculo de la calificacion
        let calificacionFinal = (puntajeTotal*10)/20;
        return calificacionFinal;
    }else{
        return 'Test sin terminar. ' + preguntasContestadasTotal + "/20";
    }
}

//Guardamos las respuesta de las preguntas de opt multiple y de tru y false
let AnswersPDF = [];
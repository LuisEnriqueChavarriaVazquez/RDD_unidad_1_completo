//Obtencion de la url actual para conocer que unidad es...
/*Debemos hacer una funcion que obtenga la URL para comprobar si estamos en la
página de la Unidad 1, 2, 3, 4, 5 y asi cargar los colores de esa unidad*/
let urlEsDeUnidadIntentos = () => {
    let urlActual = window.location.href;
    urlActual = urlActual.split("/").pop();
    return urlActual;
}


//Validamos en donde guardar el numero de intentos
let seleccionUnidadIntentos = ""; //Se guardara aqui el nombre de la variable según la unidad
if(urlEsDeUnidadIntentos() == "unidad1_evaluacion.html"){
    seleccionUnidadIntentos = "intentosU1";
}else if(urlEsDeUnidadIntentos() == "unidad2_evaluacion.html"){
    seleccionUnidadIntentos = "intentosU2";
}else if(urlEsDeUnidadIntentos() == "unidad3_evaluacion.html"){
    seleccionUnidadIntentos = "intentosU3";
}else if(urlEsDeUnidadIntentos() == "unidad4_evaluacion.html"){
    seleccionUnidadIntentos = "intentosU4";
}else if(urlEsDeUnidadIntentos() == "unidad5_evaluacion.html"){
    seleccionUnidadIntentos = "intentosU5";
}else if(urlEsDeUnidadIntentos() == "evaluacion_unidad_4.html"){
    seleccionUnidadIntentos = "intentos_unidad_4";
}

///////////////////////////////////NUMERO DE INTENTOS
//Validacion si no existe
if (localStorage.getItem(seleccionUnidadIntentos) === null) {
    localStorage.setItem(seleccionUnidadIntentos, 0);
}

//Contenedor
let intentosActuales = document.getElementById('intentosActuales');
let intentosActuales2 = document.getElementById('intentosActuales2');

function contarIntento(){
    let intentosGuardados = localStorage.getItem(seleccionUnidadIntentos);
    localStorage.setItem(seleccionUnidadIntentos, parseInt(intentosGuardados) + 1);
    intentosActuales.innerText = localStorage.getItem(seleccionUnidadIntentos);
    intentosActuales2.innerText = localStorage.getItem(seleccionUnidadIntentos);
}


///////////////////////////////////TIEMPO DE EXAMEN
//Contadores
let tiempoActualHoras = document.getElementById('tiempoActualHoras');
let tiempoActualMinutos = document.getElementById('tiempoActualMinutos');
let tiempoActualSegundos = document.getElementById('tiempoActualSegundos');

let tiempoActualHoras2 = document.getElementById('tiempoActualHoras2');
let tiempoActualMinutos2 = document.getElementById('tiempoActualMinutos2');
let tiempoActualSegundos2 = document.getElementById('tiempoActualSegundos2');

//Valores de tiempo
let segundos = 0;
let minutos = 0;
let horas = 0; 

//Cronometro
function runTime(){
    setInterval(() => {
        tiempoActualSegundos.innerText = segundos;
        tiempoActualSegundos2.innerText = segundos;
        segundos++;

        if(segundos == 59){
            minutos++;
            tiempoActualMinutos.innerText = minutos;
            tiempoActualMinutos2.innerText = minutos;
            segundos = 0;
        }

        if(minutos == 59){
            horas++;
            tiempoActualHoras.innerText = horas;
            tiempoActualHoras2.innerText = horas;
            tiempoActualMinutos.innerText = 0;
            tiempoActualMinutos2.innerText = 0;
            minutos = 0;
        }

        //console.log(horas + ":" + minutos + ":" + segundos)

    }, 1000);
}

///Trigger de inicio
document.onreadystatechange = function(event) {
    contarIntento();
    runTime();
};
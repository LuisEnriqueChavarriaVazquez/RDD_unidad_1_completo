
//Ayuda a validar cuando el examen esta completado para hacer aparece la casilla de descarga
function validateExamenCompletado(){
    console.log("Pregunta numero = ", preguntasContestadasTotal)
    if(preguntasContestadasTotal != 20){
        $('#contenedorDescargaArchivos').hide();
    }else{
        //Mostramo la casilla de descargas en la parte inferior
        $('#contenedorDescargaArchivos').show();

        //Mostramos el boton en el costado derecho para bajar los resultados
        let documentoPruebaFloat = document.getElementById('documentoPruebaFloat');
        documentoPruebaFloat.classList.remove('scale-out');
        //Retroalimentamos al usuario
        M.toast({html: `En la parte inferior es posible descargar sus resultados. ✅`});

        //Validamos la URL
        let urlVarsStats = () => {
            let urlActual = window.location.href; 
            urlActual = urlActual.split("/").pop();
            return urlActual; 
        }

        //Creamos variables para proximamente guardar valores en memoria
        let horas_stats;
        let mins_stats;
        let intentos_stats;
        let puntos_stats;

        setTimeout(() => {
            //Creamos una funcion para asignar los valores en memoria
            function asignacionStats(val1,val2,val3,val4){
                let tiempoActualHoras_stats = document.getElementById('tiempoActualHoras').textContent;
                if(tiempoActualHoras_stats == 00){
                    tiempoActualHoras_stats = 0;
                }
                let tiempoActualMinutos_stats = document.getElementById('tiempoActualMinutos').textContent;
                if(tiempoActualMinutos_stats == 00){
                    tiempoActualMinutos_stats = 0;
                }
                let intentosActuales_stats = document.getElementById('intentosActuales').textContent;
                let contadorPreguntas_stats = document.getElementById('contadorPreguntas').textContent;
                //Registramos en memoria algunos datos para las stats
                horas_stats = val1;
                mins_stats = val2;
                intentos_stats = val3;
                puntos_stats = val4;
                localStorage.setItem(horas_stats, tiempoActualHoras_stats);
                localStorage.setItem(mins_stats, tiempoActualMinutos_stats);
                localStorage.setItem(intentos_stats, intentosActuales_stats);
                localStorage.setItem(puntos_stats, contadorPreguntas_stats);
            }

            //Validamos epara guardar según en el examen en que estemos
            if(urlVarsStats() == "unidad1_evaluacion.html"){
                asignacionStats("h1","m1","i1","p1");
            }else if(urlVarsStats() == "unidad2_evaluacion.html"){
            asignacionStats("h2","m2","i2","p2");
            }else if(urlVarsStats() == "unidad3_evaluacion.html"){
            asignacionStats("h3","m3","i3","p3");
            }else if(urlVarsStats() == "unidad4_evaluacion.html"){
            asignacionStats("h4","m4","i4","p4");
            }else if(urlVarsStats() == "unidad5_evaluacion.html"){
            asignacionStats("h5","m5","i5","p5");
            }
        }, 1000);
    }
}

validateExamenCompletado();

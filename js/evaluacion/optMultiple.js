function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt2"
        , "pregunta2_opt3", "pregunta3_opt1"
        , "pregunta4_opt3", "pregunta5_opt2"
        , "pregunta6_opt2", "pregunta7_opt1"
        , "pregunta8_opt1", "pregunta9_opt3"
        , "pregunta10_opt3",];

    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, ["Recuerda que en la Sociedad Cooperativa cada socio goza de un voto sin importar el monto de su aportación; sin embargo, en la Sociedad Anónima cada acción tiene derecho a un voto, pero cada socio puede tener más de una acción.","En efecto, en la Asociación Civil, en la Sociedad Civil y en la Sociedad Cooperativa cada socio goza de un voto, sin importar el monto de su aportación.","Recuerda que en la Asociación civil cada socio goza de un voto sin importar el monto de su aportación; sin embargo, en la Sociedad de Responsabilidad Limitada por cada mil pesos o el múltiplo de esta cantidad, que se hubiere determinado, se tiene derecho a un voto."]
        , ["Recuerda que en la Sociedad Civil la toma de decisiones no está en función del capital aportado; en cambio, en la Sociedad de Responsabilidad Limitada la toma de decisiones sí está en función del capital aportado.","Recuerda que tanto en la Asociación Civil como en la Sociedad Civil la toma de decisiones no está en función del capital aportado.","Tu respuesta es correcta, en la Sociedad de Responsabilidad Limitada (S. de R.L) y en la Sociedad Anónima (S.A) la toma de decisiones está en función del capital aportado."]
        , ["Tu respuesta es correcta, en efecto las sociedades que no tributan son la Asociación Civil siempre y cuando su finalidad no sea económica y la Sociedad Cooperativa cuando es de consumo.","Las Asociaciones Civiles que tienen una finalidad económica sí tributan. De igual manera las Sociedades Cooperativas que no sean de consumo también pagan impuestos.","Recuerda que tanto la Sociedad Anónima (S.A) como las Sociedad por Acciones Simplificada (S.A.S) sí tributan, es decir están obligadas a pagar impuestos."]
        , ["Para constituir una Asociación Civil se requiere solicitar acta constitutiva ante notario público.","Para constituir una Sociedad Civil se requiere solicitar acta constitutiva ante notario público.","En efecto, para constituir una S.A.S no se requiere solicitar acta constitutiva, dicha sociedad se constituye bajo los estatutos de la Secretaría de Economía mediante el sistema electrónico de constitución."]
        , ["Las reformas en el esquema laboral se incluyen dentro de los factores político-legales y estos pertenecen al macroentorno o macroambiente.","Tu respuesta es correcta, las reformas en materia laboral se incluyen dentro de los factores político-legales y estos pertenecen al macroentorno o macroambiente.",""]
        , ["Recuerda que una persona moral es el conjunto de personas físicas, que se unen para la realización de un fin colectivo, a quien la ley otorga capacidad jurídica para tener derechos y obligaciones.","Tu respuesta es correcta, de acuerdo con el S.A.T una persona física es el individuo que realiza cualquier actividad económica (vendedor, comerciante, empleado, profesionista, etc.), el cual tiene derechos y obligaciones.",""]
        , ["Tu respuesta es correcta, a la obtención de recursos mediante diferentes fuentes se le conoce como financiamiento.","Recuerda que las actividades de inversión están dirigidas a incrementar el capital de los accionistas e inversionistas y las de financiamiento a la obtención de recursos mediante diferentes fuentes.","Actividades empresariales es un término que podría abarcar múltiples actividades; la obtención de recursos mediante diferentes fuentes se refiere específicamente a actividades de financiamiento."]
        , ["Tu respuesta es correcta, la compra de maquinaria y equipo, la compra o ampliación de una planta productiva y las mejoras en el proceso productivo, entre otras, son consideradas actividades de inversión.","Recuerda que las actividades de financiamiento están encaminadas a la obtención de recursos provenientes de una o varias fuentes; en cambio las actividades de inversión van dirigidas a incrementar el capital de los accionistas e inversionistas.",""]
        , ["Los factores político-legales, económicos y medio ambientales son factores del macroambiente o macroentorno.","Los factores demográficos, tecnológicos y socio-culturales son parte del macroambiente o macroentorno.","Tu respuesta es correcta, los proveedores, clientes, comunidad y alcaldías o municipios son factores del microambeinte o microentorno."]
        , ["La planeación y el control son dos de las fases del proceso administrativo; en cambio, la inversión y el financiamiento son dos de las funciones o actividades principales de las finanzas.","La planeación y la organización son dos de las fases del proceso administrativo; en cambio; la inversión y el financiamiento son dos de las funciones o actividades principales de las finanzas.","Tu respuesta es correcta, la inversión y el financiamiento son dos de las funciones o actividades principales de las finanzas."]
        , ];

    let respuestaCorrectaId = respuestasId[numero]
    let contenedor = document.getElementById("pregunta" + String(numero))
    let retroalimentacion = contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId = contenedor.querySelector("section>div>label>input:checked").id;

    //Accedemos al contenido de la opcion elejida por el alumno
    var respuestaAlumnoContent = document.getElementById(respuestaAlumnoId);

    //Hay que registrar la respuesta del usuario como atributo en el DOM
    let contenedorPrincipalOPTMULTIPLE = document.getElementById(`pregunta${numero}`);
    contenedorPrincipalOPTMULTIPLE.setAttribute('resultadoFinal',`${respuestaAlumnoContent.value}`)

    //Para la asignacion de la retroalimentación correspondiente
    const regex=/pregunta(\d+)_opt(\d+)/;
    var matches = respuestaAlumnoId.match(regex)

    if (matches){
        var num_pregunta=matches[1];
        var num_retro=matches[2]-1;
    }else{
        console.log("Formato incorrecto")
    }

    //Evaluacion de las preguntas
    if (respuestaCorrectaId == respuestaAlumnoId) {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Correcto: </span>` + `&nbsp;<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[num_pregunta][num_retro]}</span>`;
        retroalimentacion.classList.add('mensajeCorrecta');

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    } else {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Incorrecto: </span>`  + `&nbsp;<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[num_pregunta][num_retro]}</span>`;
        retroalimentacion.classList.add('mensajeIncorrecta');

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        preguntasContestadasTotal++;
    }

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //Cada que se responda pregunta correcta se actualiza contador
    contadorPreguntas.innerText = puntajeTotal;
    contadorPreguntas2.innerText = puntajeTotal;

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //Cada que contestemos una pregunta se actualiza el contador
    contadorPreguntasRespondidas.innerText = preguntasContestadasTotal;
    contadorPreguntasRespondidas2.innerText = preguntasContestadasTotal;

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //La barra se incrementa de tamaño con cada pregunta
    barraPreguntas.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');
    barraPreguntas2.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');

    //Se elimina el boton de la pregunta que ha sido respondida
    let button_evaluation = document.getElementById('button_evaluation_'+numero);
    button_evaluation.setAttribute('style', 'display:none');

    //Se eliminan los inputs de la pregunta
    let opt1_input = document.getElementById('pregunta' + numero + '_opt1');
    let opt2_input = document.getElementById('pregunta' + numero + '_opt2');
    let opt3_input = document.getElementById('pregunta' + numero + '_opt3');

    opt1_input.setAttribute('disabled', '');
    opt2_input.setAttribute('disabled', '');
    opt3_input.setAttribute('disabled', '');

    //Retroalimentamos al usuario
    M.toast({html: `Pregunta respondida`});

    //Validamos que el examen se hay terminado en este punto
    validateExamenCompletado();
}

const preguntas_aleatorias_indices = [0]
const preguntas = [
    0,
    {
        "enunciado": "Sociedades en las que cada socio goza de un voto, sin importar el monto de su aportación",
        "opciones": ['Sociedad Cooperativa y Sociedad Anónima', 'Asociación Civil, Sociedad Civil y Sociedad Cooperativa', 'Sociedad de Responsabilidad Limitada y Asociación Civil'],
    },
    {
        "enunciado": "Sociedades en las que el rumbo de la empresa (toma de decisiones) será definido en función del capital aportado",
        "opciones": ['Sociedad Civil (S.C) y Sociedad de Responsabilidad Limitada (S. de R.L)', 'Asociación Civil (A.C) y Sociedad Civil (S.C)', 'Sociedad de Responsabilidad Limitada (S. de R.L) y Sociedad Anónima (S.A)'],
    },
    {
        "enunciado": "Son sociedades que no tributan",
        "opciones": ['Asociación Civil (A.C) sin finalidad económica y Sociedad Cooperativa de consumo', 'Todas las asociaciones civiles y las sociedades cooperativas', 'La Sociedad Anónima (S.A)  y la Sociedad por Acciones Simplificada (S.A.S)'],
    },
    {
        "enunciado": "Sociedad que no requiere solicitar acta constitutiva ante un fedatario público y se constituye bajo los estatutos de la Secretaría de Economía mediante el sistema electrónico de constitución",
        "opciones": ['Asociación Civil (A.C)','Sociedad Civil', 'Sociedad por Acciones Simplificada (S.A.S)'],
    },
    {
        "enunciado": "En 2021 hubo una reforma, en el esquema laboral, que prohíbe la subcontratación de personal (outsourcing). Dicha reforma, se considera un factor del:",
        "opciones": ['Microentorno o microambiente', 'Macroentorno o macroambiente', 'Macroentorno o microambiente'],
    },
    {
        "enunciado": "De acuerdo con el SAT es el Individuo con capacidad para contraer obligaciones y ejercer derechos; puede prestar servicios, realizar actividades comerciales, arrendar bienes inmuebles y trabajar por salarios",
        "opciones": ['Persona moral', 'Persona física', 'Empleador y empleado'],
    },
    {
        "enunciado": "Corresponde a la obtención de recursos mediante diferentes fuentes; por ejemplo: compras a crédito, préstamos de la banca de primer piso, préstamos de la banca se segundo piso, préstamo de los socios, crowdfunding, entre otras",
        "opciones": ['Actividades de financiamiento', 'Actividades de inversión', 'Actividades empresariales'],
    },
    {
        "enunciado": "La compra de maquinaria y equipo, la compra o ampliación de una planta productiva y las mejoras en el proceso productivo, son consideradas:",
        "opciones": ['Actividades de inversión', 'Actividades de financiamiento ', 'Actividades empresariales'],
    },
    {
        "enunciado": "Son considerados elementos del microambiente o microentorno",
        "opciones": ['Factores político-legales, económicos, medio ambientales', 'Demográficos, tecnológicos y socio-culturales', 'Proveedores, clientes, comunidad, alcaldías o municipios'],
    },
    {
        "enunciado": "Son consideradas como las dos funciones o actividades principales de las finanzas",
        "opciones": ['Planeación y control', 'Planeación y organización', 'Inversión y financiamiento'],
    },
];

function preguntas_aleatorias() {



    while (preguntas_aleatorias_indices.length < 11) {
        numero = aleatorio(1, preguntas.length-1);
        if (preguntas_aleatorias_indices.includes(numero) == false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }


    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    let contenido_preguntas = "";
    for (i = 1; i < preguntas_aleatorias_indices.length; i++) {
        contenido_preguntas = contenido_preguntas + `
        <section class="randomizeDOMClass lazy" id="pregunta${preguntas_aleatorias_indices[i]}" resultadoFinal="">
            <!--Formulario para la revision de la pregunta-->
            <form class="cardPregunta clgreyl2 border1 shadow2">
                <!--Numero y enunciado de la pregunta-->
                <div class="titleQuestionContainer clgreyl3">
                    <div class="titleQuestionContainerSecondary">
                        <h5 class="getEnunciadoNumeroPdf preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                        <a class="waves-effect waves-light tooltipped clgreyl2 clbktx border1"
                            data-position="left" data-tooltip="Selecciona alguna de las opciones">
                            <i class="material-icons">help</i>
                        </a>
                    </div>
                    <p class="getEnunciadoPdf preguntaEnunciado clgreyl2 clbktx border1 textoPregunta">${preguntas[preguntas_aleatorias_indices[i]].enunciado}</p>
                </div>
                
                <!--Opciones de la pregunta-->
                <section class="optionsQuestionContainer clgreyl3" >
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt1" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt2" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt3" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}</span>
                        </label>
                    </div>
                </section>

                
                <!--Boton para revisar la pregunta-->
                <div class="evaluateQuestionContainer">
                    <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text' id="button_evaluation_${preguntas_aleatorias_indices[i]}" onclick="pregunta(${preguntas_aleatorias_indices[i]})">Revisar pregunta<i
                    class="material-icons right">done</i></a>
                    <!--Retroalimentacion de la pregunta-->
                    <div id="retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                </div>
            </form>
        </section>
        `;
    }
    contenedor_preguntas.innerHTML = contenido_preguntas;

}

function aleatorio(a, b) {
    var aleatorio = Math.round(Math.random() * (b - a) + parseInt(a));
    return aleatorio
}
preguntas_aleatorias();

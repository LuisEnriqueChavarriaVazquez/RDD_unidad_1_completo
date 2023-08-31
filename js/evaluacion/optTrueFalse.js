let questionsTF = [
    {   
        id:1,
        enunciado: "Toda empresa es una organización",
        respuesta: "V",
        V: "Tu respuesta es correcta, toda empresa es una organización.",
        F: "Recuerda que en su acepción más simple una organización es un conjunto de individuos con un objetivo o meta en común; en este entendido, la empresa es un tipo particular de organización.",
    },
    {
        id:2,
        enunciado: "Toda organización es una empresa",
        respuesta: "F",
        V: "Recuerda que una organización es un grupo de personas con un objetivo en común. Por ejemplo, el grupo de clase en el que estás inscrito es una organización, al igual que un club de algoritmia, por lo que no necesariamente toda organización es una empresa.",
        F: "Tu respuesta es correcta, recuerda que una organización es un grupo de individuos con un objetivo en común. Por ejemplo, el grupo de clase en el que estás inscrito es una organización, al igual que un club de algoritmia, por lo que no necesariamente toda organización es una empresa.",
    },
    {
        id:3,
        enunciado: "Las personas morales tienen una realidad material o corporal como las personas físicas",
        respuesta: "F",
        V: "Recuerda que las personas morales no tienen una realidad material o corporal como las personas físicas.",
        F: "Tu respuesta es correcta, las personas morales no tienen una realidad material o corporal como las personas físicas.",
    },
    {
        id:4,
        enunciado: "Las empresas no necesitan constituirse de acuerdo con la legislación vigente",
        respuesta: "F",
        V: "Recuerda que las empresas para operar en el marco de la legalidad necesitan constituirse de acuerdo con la legislación vigente.",
        F: "Tu respuesta es correcta, las empresas para operar en el marco de la legalidad necesitan constituirse de acuerdo con la legislación vigente.",
    },
    {
        id:5,
        enunciado: "Las finanzas están relacionadas con el conjunto de actividades encaminadas al uso y administración del dinero",
        respuesta: "V",
        V: "Tu respuesta es correcta, las finanzas son el conjunto de actividades encaminadas al uso y administración del dinero.",
        F: "Recuerda que las finanzas son el conjunto de actividades encaminadas al uso y administración del dinero. ",
    }, //Preguntas parafraseadas
    {
        id:6,
        enunciado: "La ética se refiere a un comportamiento humano correcto basado en la práctica de valores",
        respuesta: "V",
        V: "Tu respuesta es correcta, la ética busca un comportamiento humano correcto fundamentado en valores. Es esencial reflexionar sobre la influencia de los valores en nuestra conducta para una convivencia ética.",
        F: "Recuerda que la ética se refiere a un comportamiento humano correcto basado en la práctica de valores. Es importante entender cómo los valores éticos guían nuestras acciones y decisiones en la vida.",
    },
    {
        id:7,
        enunciado: "El código civil regula la sociedad en comandita por acciones",
        respuesta: "F",
        V: "Recuerda que el código civil no regula la sociedad en comandita por acciones. Este tipo de sociedad está regulado por el código de comercio. Es importante diferenciar entre las normativas que rigen diferentes tipos de sociedades.",
        F: "Tu respuesta es correcta, el código civil no regula la sociedad en comandita por acciones. Esta figura jurídica está regulada por el código de comercio.",
    },
    {
        id:8,
        enunciado: "La Ley General de Sociedades Mercantiles (L.G.S.M) regula la sociedad cooperativa",
        respuesta: "V",
        V: "Tu respuesta es correcta, la Ley General de Sociedades Mercantiles (L.G.S.M) no regula la sociedad cooperativa. Esta figura se rige por la Ley General de Sociedades Cooperativas (L.G.S.C).",
        F: "Recuerda que la Ley General de Sociedades Mercantiles (L.G.S.M) no regula la sociedad cooperativa. La sociedad cooperativa está regulada por la Ley General de Sociedades Cooperativas (L.G.S.C).",
    },
    {
        id:9,
        enunciado: "La sociedad en nombre colectivo ha caído en desuso",
        respuesta: "V",
        V: "Tu respuesta es correcta, la sociedad en nombre colectivo no ha caído en desuso por completo. Aunque su uso es menos frecuente en la actualidad, todavía se utiliza en ciertos casos particulares.",
        F: "Recuerda que la sociedad en nombre colectivo no ha caído en desuso. Aunque su uso es menos común en comparación con otras formas de sociedad, todavía se emplea en algunos contextos específicos.",
    },
    {
        id:10,
        enunciado: "Las personas físicas y personas morales son las únicas figuras reconocidas por el Servicio de Administración Tributaria (SAT) en México",
        respuesta: "V",
        V: "Tu respuesta es correcta, el Servicio de Administración Tributaria (SAT) en México no solo reconoce a las personas físicas y personas morales, sino también a otros contribuyentes, como las personas físicas con actividades empresariales y profesionales, entre otras.",
        F: "Recuerda que el Servicio de Administración Tributaria (SAT) en México también reconoce otras figuras, como las personas físicas con actividades empresariales y profesionales, entre otras. Existen diversas formas de contribuyentes.",
    },

];

//Sirve para revisar las preguntas una vez que han sido contestadas
function checkTFanswer(id, respuesta, idRetroalimentacion, contenedorButtonsTF){
    //Obtenemos el valor de la respuesta del cliente
    let valueAnswerUser = document.getElementById(id);
    valueAnswerUser.setAttribute('resultadoFinal', `${valueAnswerUser.innerText}`);
    valueAnswerUser = valueAnswerUser.innerText;


    const regex = /questionTF_(\d+)_button/;
    var match = id.match(regex);
    
    var buscaId = match ? match[1] : null;

    
    
    // Buscar el diccionario cuyo id coincide con el valor dado por el usuario
    let  preguntaEncontrada = questionsTF.find(pregunta => pregunta.id == buscaId);
    if (preguntaEncontrada) {
        if (valueAnswerUser == 'V'){
            var retroalimentacion = preguntaEncontrada.V;
        }else{
            var retroalimentacion = preguntaEncontrada.F;
        }    
    
      } else {
        console.log("No se encontró ninguna pregunta con el ID proporcionado.");
      }


    //Accedemos al contenedor de la retroalimentacion
    let contenedorButtonsTF_value = document.getElementById(contenedorButtonsTF);
    let retroalimentacionContainer = document.getElementById(idRetroalimentacion);

    //Validamos que sean correctas
    if(valueAnswerUser == respuesta){
        retroalimentacionContainer.classList.add('mensajeCorrecta');
        retroalimentacionContainer.textContent = "Correcto: "+retroalimentacion;

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    }else{
        retroalimentacionContainer.classList.add('mensajeIncorrecta');
        retroalimentacionContainer.textContent = "Incorrecto: "+retroalimentacion ;

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

    //Eliminamos los botones de la pregunta
    contenedorButtonsTF_value.setAttribute('style', 'display: none;')

    //Retroalimentamos al usuario
    M.toast({html: `Pregunta respondida`});

    //Validamos que el examen se hay terminado en este punto
    validateExamenCompletado();

    
}

function printQuestionsTrueFalse(){
    let containerTrueFalse = document.getElementById('contenedor_preguntas');

    let suffledquestionsTF = shuffle(questionsTF);

    for(var i = 0; i < 8; i++){
        containerTrueFalse.innerHTML +=  `
            <section class="randomizeDOMClass lazy">
                <form class="cardPregunta clgreyl2 border1 shadow2">
                    <!--Numero y enunciado de la pregunta-->
                    <div class="titleQuestionContainer clgreyl3">
                        <div class="titleQuestionContainerSecondary">
                            <h5 class="getEnunciadoNumeroPdf preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                            <a class="tooltipped clgreyl2 clbktx border1"
                            data-position="left" data-tooltip="Presiona el boton izquierdo o derecho">
                            <i class="material-icons">help</i>
                            </a>
                        </div>
                        <p class="getEnunciadoPdf preguntaEnunciado clgreyl2 clbktx border1 textoPregunta">${suffledquestionsTF[i].enunciado}</p>
                    </div>
                    
                    <section class="optionsQuestionContainer clgreyl3 hide-on-small-only" ></section>

                    <!--Boton para revisar la pregunta-->
                    <div class="evaluateQuestionContainer">
                        <!--Opciones de la pregunta-->
                        <section class="optionsQuestionContainerTF clgrel1" id="questionTFButtonsContainer_${suffledquestionsTF[i].id}">
                            <div class="buttonTrue shadow2 waves-effect cl5 white-text"  id="questionTF_${suffledquestionsTF[i].id}_buttonTrue" onclick="checkTFanswer('questionTF_${suffledquestionsTF[i].id}_buttonTrue','${suffledquestionsTF[i].respuesta}','questionTF_${suffledquestionsTF[i].id}_retroalimentacion','questionTFButtonsContainer_${suffledquestionsTF[i].id}')">
                                V
                            </div>
                            <div class="buttonFalse shadow2 waves-effect cl4 white-text"  id="questionTF_${suffledquestionsTF[i].id}_buttonFalse" onclick="checkTFanswer('questionTF_${suffledquestionsTF[i].id}_buttonFalse','${suffledquestionsTF[i].respuesta}','questionTF_${suffledquestionsTF[i].id}_retroalimentacion','questionTFButtonsContainer_${suffledquestionsTF[i].id}')">
                                F
                            </div>
                        </section>
                        <!--Retroalimentacion de la pregunta-->
                        <div id="questionTF_${suffledquestionsTF[i].id}_retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                    </div>
                </form>
            </section>
        `;
    }
}

printQuestionsTrueFalse();
(() => {
    /**
     * La idea de este script es revolver las preguntas para que no se repitan en
     * el tipo de pregunta.
     */

    //Mezclamos todas las preguntas
    let randomizeDOMClass = document.getElementsByClassName('randomizeDOMClass');
    let randomAllQuestionBoxes = shuffle([...randomizeDOMClass]);

    //Convertimos cada elemento (Nodo HTML) en TEXTO
    let elementsToText = "";
    randomAllQuestionBoxes.map((e) => {
        elementsToText += e.outerHTML;
    });

    //Ocultamos las viejas preguntas
    $('.randomizeDOMClass').hide();

    //Metemos el nuevo set de preguntas en el contenedor
    let containerRandomQuestion = document.getElementById('contenedor_preguntas');
    containerRandomQuestion.innerHTML = elementsToText;

})();

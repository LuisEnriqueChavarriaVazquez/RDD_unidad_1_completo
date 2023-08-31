////////////////////////////////////////////////////////////
//Valores guardados en memoria
let valueTextAdjust_1 = localStorage.getItem('valueTextAdjust_1');
let valueTextAdjust_2 = localStorage.getItem('valueTextAdjust_2');
let valueTextAdjust_3 = localStorage.getItem('valueTextAdjust_3');
let valueTextAdjust_6 = localStorage.getItem('valueTextAdjust_6');
let valueTextAdjust_7 = localStorage.getItem('valueTextAdjust_7');
let valueTextAdjust_8 = localStorage.getItem('valueTextAdjust_8');
let valueTextAdjust_size = localStorage.getItem('valueTextAdjust_size');

//En caso de que los valores de los botones no existan no existan
if (valueTextAdjust_1 === null || 
    valueTextAdjust_2 === null || 
    valueTextAdjust_3 === null || 
    valueTextAdjust_6 === null ||
    valueTextAdjust_7 === null ||
    valueTextAdjust_8 === null ||
    valueTextAdjust_size === null){
    localStorage.setItem('valueTextAdjust_1', '0');
    valueTextAdjust_1 = localStorage.getItem('valueTextAdjust_1');
    localStorage.setItem('valueTextAdjust_2', '0');
    valueTextAdjust_2 = localStorage.getItem('valueTextAdjust_2');
    localStorage.setItem('valueTextAdjust_3', '0');
    valueTextAdjust_3 = localStorage.getItem('valueTextAdjust_3');
    localStorage.setItem('valueTextAdjust_6', '0');
    valueTextAdjust_6 = localStorage.getItem('valueTextAdjust_6');
    localStorage.setItem('valueTextAdjust_7', '0');
    valueTextAdjust_7 = localStorage.getItem('valueTextAdjust_7');
    localStorage.setItem('valueTextAdjust_8', '0');
    valueTextAdjust_8 = localStorage.getItem('valueTextAdjust_8');
    localStorage.setItem('valueTextAdjust_size', 'h2');
    valueTextAdjust_size = localStorage.getItem('valueTextAdjust_size');
}


///////////////////////////////////////////////////////////
//Identificador de texto dinamico
let textoDinamicoIdentificador = document.getElementsByClassName('textoDinamicoIdentificador');

//Clases tamaños
let textoReadingElementsH1 = document.getElementsByClassName('textoReadingH1');
let textoReadingElementsH3 = document.getElementsByClassName('textoReadingH3');
let textoReadingElementsH2 = document.getElementsByClassName('textoReadingH2');

//Arrays de tamaños
let textoReadingElementsH2Arr = [...textoReadingElementsH2];
let textoReadingElementsH1Arr = [...textoReadingElementsH1];
let textoReadingElementsH3Arr = [...textoReadingElementsH3];
            
//Cantidad de textos
let totalTextosDinamicos = (textoReadingElementsH2.length + textoReadingElementsH1.length + textoReadingElementsH3.length)/3;
        

//Botones para el tamaño del texto
let textSizeOne = document.getElementsByClassName('textSizeOne');
let textSizeTwo = document.getElementsByClassName('textSizeTwo');
let textSizeThree = document.getElementsByClassName('textSizeThree');

//Conversion de array
let textSizeOneArr = [...textSizeOne];
let textSizeTwoArr = [...textSizeTwo];
let textSizeThreeArr = [...textSizeThree];

//Reemplazo de textos
function reemplazoH2H3porH1(){
    console.log('textoReadingElementsH2Arr: ', textoReadingElementsH2Arr);
    console.log('textoReadingElementsH3Arr: ', textoReadingElementsH3Arr);
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoReadingH1');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH3');
        });

        textoReadingElementsH3Arr.map(a => {
            a.classList.add('textoReadingH1');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
        });
    }
    console.log("Texto H1");
}


function reemplazoH1H2porH3(){
    console.log('textoReadingElementsH2Arr: ', textoReadingElementsH2Arr);
    console.log('textoReadingElementsH1Arr: ', textoReadingElementsH1Arr);
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoReadingH3');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH1');
        });
        
        textoReadingElementsH1Arr.map(a => {
            a.classList.add('textoReadingH3');
            a.classList.remove('textoReadingH1');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
        });
    }
    console.log("Texto H3");
}

function reemplazoH1H3porH2(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH1Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });
        
        textoReadingElementsH3Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });

        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });
    }
    console.log("Texto H2")
}

//Cambios en los botones cuando son presionados (Estilos)
//Tamaño H1
for(var i = 0; i < textSizeOne.length; i++){
    textSizeOne[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.add('activeButtonTextLateral');
        });

        textSizeTwoArr.map(e => {
            e.classList.remove('activeButtonTextLateral');
        });

        textSizeThreeArr.map(e => {
            e.classList.remove('activeButtonTextLateral');
        });

        reemplazoH2H3porH1();
        localStorage.setItem('valueTextAdjust_size', 'h1');
           });
}

//Tamaño H2
for(var i = 0; i < textSizeTwo.length; i++){
    textSizeTwo[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.remove('activeButtonTextLateral');
        });

        textSizeTwoArr.map(e => {
            e.classList.add('activeButtonTextLateral');
        });

        textSizeThreeArr.map(e => {
            e.classList.remove('activeButtonTextLateral');
        });

        reemplazoH1H3porH2();
        localStorage.setItem('valueTextAdjust_size', 'h2');
           });
}

//Tamaño H3
for(var i = 0; i < textSizeThree.length; i++){
    textSizeThree[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.remove('activeButtonTextLateral');
        });

        textSizeTwoArr.map(e => {
            e.classList.remove('activeButtonTextLateral');
        });

        textSizeThreeArr.map(e => {
            e.classList.add('activeButtonTextLateral');
        });

        reemplazoH1H2porH3();
        localStorage.setItem('valueTextAdjust_size', 'h3');
           });
}


//Estado de los botones
let stateCero = localStorage.getItem('valueTextAdjust_1');
let stateOne = localStorage.getItem('valueTextAdjust_2');
let stateTwo = localStorage.getItem('valueTextAdjust_3');
let stateThree = localStorage.getItem('valueTextAdjust_8');
let stateFour = localStorage.getItem('valueTextAdjust_6');
let stateFive = localStorage.getItem('valueTextAdjust_7');
let stateSize = localStorage.getItem('valueTextAdjust_size');

//Funciones para comprobar estado de los botones al cargar la pagina
function checkMemoryButtonState(state,idElement,property){
    //Si no es el boton para palabras clave entonces...
    if(idElement != "adjustFont_6" && idElement != "adjustFont_size"){
        if(state == 1){
            $(`#${idElement}`).addClass('activeButtonTextLateral');
            $(`#${idElement}`).addClass('shadow2');
            $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass(`${property}`);
        }else{
            $(`#${idElement}`).removeClass('activeButtonTextLateral');
            $(`#${idElement}`).removeClass('shadow2');
            $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass(`${property}`);
        }
    }else if(idElement == 'adjustFont_6'){ //En caso de que sea el boton de palabras clave
        if(state == 1){
            $(`#${idElement}`).addClass('activeButtonTextLateral');
            $(`#${idElement}`).addClass('shadow2');
            $('.keyWord').addClass(`${property}`);
        }else{
            $(`#${idElement}`).removeClass('activeButtonTextLateral');
            $(`#${idElement}`).removeClass('shadow2');
            $('.keyWord').removeClass(`${property}`);
        }
    }else if(idElement == 'adjustFont_size'){
        if(stateSize == "h2"){
            $('.textSizeOne').removeClass('activeButtonTextLateral');
            $('.textSizeTwo').addClass('activeButtonTextLateral');
            $('.textSizeThree').removeClass('activeButtonTextLateral');
            reemplazoH1H3porH2();
        }else if(stateSize == "h3"){
            $('.textSizeOne').removeClass('activeButtonTextLateral');
            $('.textSizeTwo').removeClass('activeButtonTextLateral');
            $('.textSizeThree').addClass('activeButtonTextLateral');
            reemplazoH1H2porH3();
        }else if(stateSize == "h1"){
            $('.textSizeOne').addClass('activeButtonTextLateral');
            $('.textSizeTwo').removeClass('activeButtonTextLateral');
            $('.textSizeThree').removeClass('activeButtonTextLateral');
            reemplazoH2H3porH1();
        }
    }   
}
checkMemoryButtonState(stateCero,'adjustFont_1','textBoldOwn');
checkMemoryButtonState(stateOne,'adjustFont_2','textItalicOwn');
checkMemoryButtonState(stateTwo,'adjustFont_3','textLineSubOwn');
checkMemoryButtonState(stateFour,'adjustFont_6','textWordHelp');
checkMemoryButtonState(stateFive,'adjustFont_7','textAlignLeftOwn');
checkMemoryButtonState(stateThree,'adjustFont_8','textSpaceLineOwn');
checkMemoryButtonState(stateSize,'adjustFont_size');

//Para los botones en bold e italic y el space line
//Bold
$('#adjustFont_1').click( function() {
    $(this).toggleClass('activeButtonTextLateral');

    if(stateCero == 0){
        stateCero = 1;
        $('#adjustFont_1').addClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_1', '1');
        }else{
        stateCero = 0;
        $('#adjustFont_1').removeClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_1', '0');
        
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textBoldOwn');
});

//Italic
$('#adjustFont_2').click( function() {
    $(this).toggleClass('activeButtonTextLateral');

    if(stateOne == 0){
        stateOne = 1;
        $('#adjustFont_2').addClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_2', '1');
        }else{
        stateOne = 0;
        $('#adjustFont_2').removeClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_2', '0');
        
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textItalicOwn')
});

//Underline
$('#adjustFont_3').click( function() {
    $(this).toggleClass('activeButtonTextLateral');

    if(stateTwo == 0){
        stateTwo = 1;
        $('#adjustFont_3').addClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_3', '1');
        }else{
        stateTwo = 0;
        $('#adjustFont_3').removeClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_3', '0');
        
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textLineSubOwn')
});

//SpaceLine
$('#adjustFont_8').click( function() {
    $(this).toggleClass('activeButtonTextLateral');

    if(stateThree == 0){
        stateThree = 1;
        $('#adjustFont_8').addClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_8', '1');
        }else{
        stateThree = 0;
        $('#adjustFont_8').removeClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_8', '0');
        
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textSpaceLineOwn')
});

//Align texts
$('#adjustFont_7').click( function() {
    $(this).toggleClass('activeButtonTextLateral');

    if(stateFive == 0){
        stateFive = 1;
        $('#adjustFont_7').addClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_7', '1');
        }else{
        stateFive = 0;
        $('#adjustFont_7').removeClass('shadow2');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_7', '0');
        
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textAlignLeftOwn')
});


//Highlight
$('#adjustFont_6').click( function() {
    $(this).toggleClass('activeButtonTextLateral');

    if(stateFour == 0){
        stateFour = 1;
        $('#adjustFont_6').addClass('shadow2');
        $('.keyWord').addClass('textWordHelp');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_6', '1');
        }else{
        stateFour = 0;
        $('#adjustFont_6').removeClass('shadow2');
        $('.keyWord').removeClass('textWordHelp');
        //Guardado en memoria
        localStorage.setItem('valueTextAdjust_6', '0');
        
    }
});


//Función para refrescar los estilos
function refreshStyles(){
    //Verificamos el valor guardado en local storage
    if(stateCero != 0){
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_1').addClass('shadow2');
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass('textBoldOwn');
    }else{
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_1').removeClass('shadow2');   
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass('textBoldOwn');
    }

    //Verificamos el valor guardado en local storage
    if(stateOne != 0){
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_2').addClass('shadow2');
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass('textItalicOwn');
    }else{
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_2').removeClass('shadow2');   
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass('textItalicOwn');
    }
    
    //Verificamos el valor guardado en local storage
    if(stateFour != 0){
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_6').addClass('shadow2');
        //Modificamos los textos con los estilos que estan actualmente
        $(".keyWord").addClass('textWordHelp');
    }else{
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_6').removeClass('shadow2');   
        //Modificamos los textos con los estilos que estan actualmente
        $(".keyWord").removeClass('textWordHelp');
    }

    //Verificamos el valor guardado en local storage
    if(stateTwo != 0){
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_3').addClass('shadow2');
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass('textLineSubOwn');
    }else{
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_3').removeClass('shadow2');   
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass('textLineSubOwn');
    }

    //Verificamos el valor guardado en local storage
    if(stateThree != 0){
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_8').addClass('shadow2');
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass('textSpaceLineOwn');
    }else{
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_8').removeClass('shadow2');   
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass('textSpaceLineOwn');
    }

    //Verificamos el valor guardado en local storage
    if(stateFive != 0){
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_7').addClass('shadow2');
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass('textAlignLeftOwn');
    }else{
        //Agregamos los estilos de los botones laterales en cuanto carga la pagina
        $('#adjustFont_7').removeClass('shadow2');   
        //Modificamos los textos con los estilos que estan actualmente
        $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass('textAlignLeftOwn');
    }


    // setTimeout(() => {
    //     console.log('stateSize: ', stateSize);
    //     checkMemoryButtonState(stateSize,'adjustFont_size');
    // },10)
}

//IMPORTANTE
/**
 * Sirve para refrescar los estilos cuando 
 * cargamos nuestra página.
*/
window.onload = function() {
    refreshStyles();
}

//IMPORTANTE
/**
 * Sirve para refrescar los estilos cada que accedemos a
 * una nueva sección
 */
//Accedemos al contenedor que tiene las opciones para el menu en computadora.
let buttonContent = document.getElementById("lateralUnityMenuSectionContainer");
let buttonContentMobile = document.getElementsByClassName("mobileOptionsContainer");

//Debemos refrescar los estilos con un retraso, para que primero se cargue el contenido y luego se refresquen los estilos.
//Si tiene dudas revisar el tema de Call stack del navegador
buttonContent.addEventListener('click', () => {
    setTimeout(() => {
        refreshStyles();
    }, 10);
});

//Lo mismo pero para los botones de moviles
for(var i = 0; i <= buttonContentMobile.length; i++){
    buttonContentMobile[i].addEventListener('click', () => {
        setTimeout(() => {
            refreshStyles();
        }, 10);
    });
}


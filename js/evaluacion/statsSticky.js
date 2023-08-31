//Boton para mostrar las estidisticas al momento de contestar las preguntas
let buttonStats = document.getElementById('stats-button-exam');
let menuIconUnityContent = document.getElementById('menuIconUnityContent');
let menuStickyUnity = document.getElementById('menuStickyUnity');
let contenedorStatsIdentificador = document.getElementById('contenedorStatsIdentificadorFixed');

//Button de ayuda
let buttonComputerHelpTest = document.getElementById('buttonComputerHelp');

let scrollDownButtonStats, scrollUpButtonStats;
window.onscroll = function () {
    scrollDownButtonStats = window.scrollY;
    scrollUpButtonStats = window.scrollX;

    if(scrollDownButtonStats >= 145){
        buttonStats.classList.remove('scale-out');
        buttonComputerHelpTest.classList.add('scale-out');
        //contenedorStatsIdentificador.classList.remove('scale-out');
        menuStickyUnity.classList.add('tabsFixed');
    }else{
        buttonStats.classList.add('scale-out');
        buttonComputerHelpTest.classList.remove('scale-out');
        contenedorStatsIdentificador.classList.add('scale-out');
        menuStickyUnity.classList.remove('tabsFixed');
    }
};

//Hacer aparecer el menu de las estadísticas cuando esta abajo.
let activeButtonStats = false; 
buttonStats.addEventListener('click', () => {
    contenedorStatsIdentificador.classList.toggle('scale-out');

    if(activeButtonStats == false){
        activeButtonStats = true;
    }else{
        activeButtonStats = false;
    }
});



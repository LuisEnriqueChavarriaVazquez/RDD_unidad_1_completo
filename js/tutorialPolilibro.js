var driver = new Driver({
    allowClose: false,
    showButtons: true,         
    closeBtnText: 'Cerrar',      
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',   
    keyboardControl: true,
});

//Accedemos al boton de ayuda
let buttonHelp = document.getElementById('buttonComputerHelp');
//Boton del menu lateral
let a12tutorialButton = document.getElementById('a12tutorialButton');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a1Link',
    popover: {
      className: 'first-step-popover-class',
      title: 'Polilibro unidad',
      description: 'De click en alguna de las unidades para acceder al contenido.',
      position: 'bottom' 
    }
  },
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})
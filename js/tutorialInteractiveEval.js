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
    element: '#contenedorStatsIdentificador',
    popover: {
      className: 'first-step-popover-class',
      title: 'Panel de información',
      description: 'En este panel puede ver informacion fundamental para la realización del cuestionario.',
      position: 'bottom'
    }
  },
  {
    element: '#a1tutorialButton',
    popover: {
      title: 'Puntos obtenidos',
      description: 'En esta sección podrás encontrar la cantidad de puntos que obtuviste en la evaluación. Estos puntos pueden indicar tu nivel de conocimiento o habilidad en un tema determinado.',
      position: 'bottom'
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Preguntas respondidas',
      description: 'En esta sección se muestra la cantidad de preguntas que has respondido en la evaluación. Esto puede ayudarte a entender cuántas preguntas te faltan por responder y a estimar cuánto tiempo te tomará completar la evaluación.',
      position: 'bottom'
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      title: 'Barra de porcentaje de preguntas respondidas',
      description: 'Esta sección muestra el porcentaje de preguntas que has respondido en la evaluación. Esto te permitirá saber qué tan avanzado estás en la evaluación y cuánto te falta para terminar.',
      position: 'bottom'
    }
  },
  {
    element: '#a4tutorialButton',
    popover: {
      title: 'Fecha en que el cuestionario fue contestado',
      description: 'En esta sección se muestra la fecha en que completaste el cuestionario. Esto puede ayudarte a llevar un registro de tus evaluaciones y a saber cuándo fue la última vez que completaste una.',
      position: 'bottom'
    }
  },
  {
    element: '#a5tutorialButton',
    popover: {
      title: 'Tiempo que tardó en responder el cuestionario',
      description: 'En esta sección se muestra el tiempo que tardaste en responder el cuestionario. Esto te puede dar una idea de cuánto tiempo necesitas para completar una evaluación y cuánto tiempo debes dedicarle en el futuro.',
      position: 'bottom'
    }
  },
  {
    element: '#a6tutorialButton',
    popover: {
      title: 'Total de intentos',
      description: 'En esta sección se muestra el número de intentos que has realizado para completar la evaluación. Esto te permitirá saber cuántas veces has intentado completar la evaluación y si necesitas mejorar tu rendimiento.',
      position: 'bottom'
    }
  }
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})
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
    element: '#a1tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Inicio',
      description: 'En esta primera sección podrá entender los aspectos básicos del sitio web.',
      position: 'right'
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Contenidos',
      description: 'Esta sección presenta el cierre de la unidad, resumiendo los principales temas y conceptos aprendidos. Podrás hacer una revisión final antes de pasar a la siguiente unidad.',
      position: 'right'
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      title: 'Material de apoyo',
      description: 'Aquí encontrarás la evaluación de la unidad. Preguntas de opción múltiple, verdadero o falso, y ensayos te permitirán medir tu conocimiento y comprensión de los temas abordados.',
      position: 'right'
    }
  },
  {
    element: '#a4tutorialButton',
    popover: {
      title: 'Actividades de aprendizaje',
      description: 'Básicamente aquí podrá acceder a las actividades relacionadas con los contenidos del curso.',
      position: 'right'
    }
  },
  {
    element: '#a5tutorialButton',
    popover: {
      title: 'Cierre de la unidad temática',
      description: 'En este apartado termina la unidad y se aclarán aspectos sobre el cierre de la misma.',
      position: 'right'
    }
  },
  {
    element: '#a6tutorialButton',
    popover: {
      title: 'Evaluación',
      description: 'Ponga a prueba sus conocimiento por medio de la siguiente evaluación.',
      position: 'right'
    }
  },
  {
    element: '#a7tutorialButton',
    popover: {
      title: 'Referencias de la unidad',
      description: 'Acceda a las referencias de los contenidos presentes en la unidad.',
      position: 'right'
    }
  },
  {
    element: '#a8tutorialButton',
    popover: {
      title: 'Contacto',
      description: 'Contacto de los docentes.',
      position: 'right'
    }
  },
  {
    element: '#a9tutorialButton',
    popover: {
      title: 'Glosario',
      description: 'Glosario de los conceptos de la unidad.',
      position: 'right'
    }
  },
  {
    element: '#a10tutorialButton',
    popover: {
      title: 'Manual de usuario',
      description: 'Si tiene dudas adicionales, puede revisar el contenido del manual de usuarios.',
      position: 'right'
    }
  }
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})
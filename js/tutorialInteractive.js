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
      title: 'Polilibro',
      description: 'En esta sección podrá encontrar las unidades temáticas.',
      position: 'bottom' 
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Glosario',
      description: 'Aquí podra encontrar los conceptos más importantes de cada una de las unidades temáticas.',
      position: 'bottom'
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      title: 'Contacto',
      description: 'Encuentre toda la información de los docentes, así como su correo electrónico.',
      position: 'bottom'
    }
  },
  {
    element: '#a4tutorialButton',
    popover: {
      title: 'Manual',
      description: 'Obtenga acceso al manual de usuario en formato digital y en formato PDF.',
      position: 'bottom'
    }
  },
  {
    element: '#a5tutorialButton',
    popover: {
      title: 'Configuración',
      description: 'Obtenga acceso a las configuraciones de la página (modo oscuro, modo lectura, configuración de textos, etc.)',
      position: 'left'
    }
  },
  {
    element: '#a6tutorialButton',
    popover: {
      title: 'Bienvenida',
      
      description: 'En esta pestaña encontrará el texto introductorio al sitio web.',
      position: 'right'
    }
  },
  {
    element: '#a7tutorialButton',
    popover: {
      title: 'Metodología',
      description: 'Aquí se describe la metodología empleada.',
      position: 'bottom'
    }
  },
  {
    element: '#a8tutorialButton',
    popover: {
      title: 'Unidad de competencia',
      description: 'Se describe la unidad de competencia.',
      position: 'bottom'
    }
  },
  {
    element: '#a9tutorialButton',
    popover: {
      title: 'Evaluación de los aprendizajes',
      description: 'Aqui se describre la forma de evaluación de los aprendizajes',
      position: 'bottom'
    }
  },
  {
    element: '#a10tutorialButton',
    popover: {
      title: 'Requerimientos',
      description: 'Se describen los requeirmientos necesarios para ejecutar el sitio web o aplicación en su dispositivo',
      position: 'bottom'
    }
  },
  {
    element: '#a11tutorialButton',
    popover: {
      title: 'Fuentes de consulta',
      description: 'En este apartado es posible ver las fuentes de consulta del sitio',
      position: 'left'
    }
  },
  {
    element: '#a12tutorialButton',
    onNext: () => {
        a12tutorialButton.click();
    },
    popover: {
      title: 'Boton de menu',
      description: 'Dando click al boton del menú también puede acceder a la opciones anteriormente descritas.',
      position: 'right'
    }
  },
  {
    element: '#mobile-demo',
    popover: {
      title: 'Menu lateral',
      description: 'El menú lateral es una excelente opción en caso de trabajar con dispositivos móviles.',
      position: 'right'
    },
  },
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})
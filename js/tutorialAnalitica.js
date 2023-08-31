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

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#general_1',
    popover: {
      className: 'first-step-popover-class',
      title: 'Calificaciones de cada prueba',
      description: 'Podra encontrar información relevante sobre su desempeño en los examenes de cada unidad.',
      position: 'bottom' 
    }
  },
  {
    element: '#general_2',
    popover: {
      title: 'Exámenes respondidos',
      description: 'Revise cuantos exámenes han sido respondidos.',
      position: 'bottom' 
    }
  },
  {
    element: '#general_3',
    popover: {
      title: 'Tiempo promedio',
      description: 'Consulta el tiempo que en promedio le toma terminar una prueba.',
      position: 'bottom' 
    }
  },  {
    element: '#general_4',
    popover: {
      title: 'Intentos promedio',
      description: 'Consulte el promedio de intentos usados en cada prueba.',
      position: 'bottom' 
    }
  },  {
    element: '#general_5',
    popover: {
      title: 'índice de aprobación',
      description: 'Aquí podrá ver el índice de aprobación.',
      position: 'bottom' 
    }
  },  {
    element: '#grafica_1',
    popover: {
      title: 'Grafica de calificaciones',
      description: 'Podra encontrar un gráfica que le ayudará a visualizar los promedios de forma gráfica.',
      position: 'bottom' 
    }
  },
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})
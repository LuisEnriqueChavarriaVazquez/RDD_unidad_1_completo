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
    element: '#modOscuro',
    popover: {
      className: 'first-step-popover-class',
      title: 'Botón de modo oscuro/luz',
      description: 'Este botón te permitirá cambiar la apariencia de la página web entre modo oscuro y modo luz. Al hacer clic en el botón, se cambiará el esquema de color de la página para mejorar la legibilidad y la comodidad visual.',
      position: 'bottom'
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Botón de modo sepia/lectura',
      description: 'Este botón te permitirá cambiar el modo de lectura de la página a modo sepia. Al hacer clic en el botón, se cambiará el esquema de color de la página a sepia para reducir la fatiga visual al leer durante largos períodos de tiempo.',
      position: 'bottom'
    }
  },
  {
    element: '#iconModSepia',
    popover: {
      title: 'Indicador de modo sepia',
      description: 'Este indicador le dirá el nivel actual de brillo en la página.',
      position: 'bottom'
    }
  },
  {
    element: '#adjustFont_1',
    popover: {
      title: 'Botón de texto en negrita',
      description: 'Este botón te permitirá aplicar negrita al texto seleccionado. Al hacer clic en el botón, el texto seleccionado aparecerá en negrita.',
      position: 'bottom'
    }
  },
  {
    element: '#adjustFont_2',
    popover: {
      title: 'Botón de texto en itálica',
      description: 'Este botón te permitirá aplicar cursiva al texto seleccionado. Al hacer clic en el botón, el texto seleccionado aparecerá en cursiva.',
      position: 'bottom'
    }
  },
  {
    element: '#adjustFont_3',
    popover: {
      title: 'Botón de subrayado',
      description: 'Este botón te permitirá aplicar subrayado al texto seleccionado. Al hacer clic en el botón, el texto seleccionado aparecerá subrayado.',
      position: 'left'
    }
  },
  {
    element: '#adjustFont_6',
    popover: {
      title: 'Botón de activar palabras clave',
      description: 'Este botón te permitirá activar las palabras clave que se destacarán en el texto seleccionado. Al hacer clic en el botón, las palabras clave seleccionadas se resaltarán para facilitar su identificación.',
      position: 'bottom'
    }
  },
  {
    element: '#adjustFont_7',
    popover: {
      title: 'Botón para quitar justificado de texto',
      description: 'Este botón te permitirá quitar el justificado del texto seleccionado. Al hacer clic en el botón, el texto seleccionado se alineará a la izquierda.',
      position: 'bottom'
    }
  },
  {
    element: '#adjustFont_8',
    popover: {
      title: 'Botón de altura de línea',
      description: 'Este botón te permitirá ajustar la altura de la línea del texto seleccionado. Al hacer clic en el botón, podrás ajustar la altura de línea para mejorar la legibilidad del texto.',
      position: 'left'
    }
  },
  {
    element: '#adjustFont_size',
    popover: {
      title: 'Botones para elegir el tamaño de la fuente',
      description: 'Estos botones te permitirán ajustar el tamaño de la fuente del texto seleccionado. Al hacer clic en los botones, podrás aumentar o disminuir el tamaño de la fuente para mejorar la legibilidad del texto.',
      position: 'bottom'
    }
  },
  {
    element: '#adjustPreviewContainer',
    popover: {
      title: 'Sección para la vista previa de los textos modificados',
      description: 'Esta sección le permitirá previsualizar los cambios realizados en la sección seleccionada antes de aplicarlos definitivamente. Al hacer clic en el botón, se mostrará una vista previa de los cambios realizados en la sección seleccionada para que puedas verificarlos antes de aplicarlos.',
      position: 'bottom'
    }
  }
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})
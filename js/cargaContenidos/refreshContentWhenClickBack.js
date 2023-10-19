document.addEventListener('DOMContentLoaded', function() {
    // Esperar medio segundo antes de verificar los elementos
    setTimeout(function() {
        // Obtener todos los elementos con la clase tabsContentContainerInfo
        const elementos = document.querySelectorAll('.tabsContentContainerInfo');
        
        // Contador para elementos con display: none
        let elementosConDisplayNone = 0;

        // Verificar el estado de cada elemento
        elementos.forEach(function(elemento) {
            const estilo = getComputedStyle(elemento);
            if (estilo.display === 'none') {
                elementosConDisplayNone++;
            }
        });

        // Si hay al menos cuatro elementos con display: none, evita la recarga
        if (elementosConDisplayNone < 4) {
            location.reload();
        }
    }, 1000); // Espera segundo (500 ms) antes de verificar
});

//Codigo de prueba para ver si se actualiza la pagina en caso de que los elementos no tengan el display none
//La funcion prueba lo que hace es quitar los display none.
/**
 * Para que funcione debemos cambiar el setTimeout de la linea 3 por un setInterval
 */
function prueba() {
    // Obtener los últimos cuatro elementos
    const elementosOcultos = document.querySelectorAll('.tabsContentContainerInfo:nth-last-child(-n+4)');

    // Mostrar los elementos ocultos
    elementosOcultos.forEach(function(elemento) {
        elemento.style.display = 'block';
    });
};

// setTimeout(() => {
//     prueba();
// }, 1200);

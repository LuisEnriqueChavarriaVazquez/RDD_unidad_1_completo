let progressReading = document.getElementById('progressReading');
let lastScrollTop = 0; // variable para almacenar la última posición de scroll
let pixelCounter = 0;  //Contador de pixeles

function readingProgressUpdateBar() {
    ////////////////////////////////// Total de altura de la pagina
    const pageHeight = document.documentElement.scrollHeight; // Este es 100%
    
    ////////////////////////////////////////////////////////////
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // obtener la posición actual de scroll
  
    if (currentScrollTop > lastScrollTop) {
        // el usuario se está desplazando hacia abajo
        pixelCounter += currentScrollTop - lastScrollTop; // sumar los píxeles desplazados
    } else {
        // el usuario se está desplazando hacia arriba
        pixelCounter -= lastScrollTop - currentScrollTop; // restar los píxeles desplazados
    }
    
    lastScrollTop = currentScrollTop; // actualizar la última posición de scroll
    

    /////////// Ancho final para la barra inferior
    let anchoFinal = ((lastScrollTop*100)/pageHeight);
    progressReading.setAttribute('style', `width: ${anchoFinal + 25}%;`);

    //Comprobamos que estemos en el final de la página
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        progressReading.setAttribute('style', `width: ${100}%;`);
        //M.toast({html: 'Sección completada 📖'});
    }
}
  
window.addEventListener('scroll', readingProgressUpdateBar);
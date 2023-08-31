let progressReadingContent = document.getElementById('progressReadingContent');
let lastScrollTopContent = 0; // variable para almacenar la última posición de scroll
let pixelCounterContent = 0;  //Contador de pixeles

let lateralUnityContent = document.getElementById('lateralUnityContent'); //Contenedor

function readingProgressUpdateBar() {
    ////////////////////////////////// Total de altura de la pagina
    const pageHeight = (lateralUnityContent.scrollHeight)/2; // Este es 100% (Altura máxima del contenedor)
    console.log('Altura del div: ', pageHeight);
    
    ////////////////////////////////////////////////////////////
    let currentScrollTop = lateralUnityContent.scrollTop;; // obtener la posición actual de scroll
    console.log('Altura recorrida: ', currentScrollTop);
  
    if (currentScrollTop > lastScrollTopContent) {
        // el usuario se está desplazando hacia abajo
        pixelCounterContent += currentScrollTop - lastScrollTopContent; // sumar los píxeles desplazados
    } else {
        // el usuario se está desplazando hacia arriba
        pixelCounterContent -= lastScrollTopContent - currentScrollTop; // restar los píxeles desplazados
    }
    
    lastScrollTopContent = currentScrollTop; // actualizar la última posición de scroll
    

    /////////// Ancho final para la barra inferior
    let anchoFinal = ((lastScrollTopContent*100)/pageHeight);
    progressReadingContent.setAttribute('style', `width: ${anchoFinal}%;`)

    //Comprobamos que estemos en el final de la página
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        progressReading.setAttribute('style', `width: ${100}%;`);
        //M.toast({html: 'Sección completada 📖'});
    }
}
  
lateralUnityContent.addEventListener('scroll', readingProgressUpdateBar);
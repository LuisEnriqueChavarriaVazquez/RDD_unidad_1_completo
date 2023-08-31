function ajustarTamanoTabs(){
    //Tabs de la sección de inicio
    let tabsContentElement = document.getElementById('tabsContentID');
    
    //Contenedor principal del contenido
    let parentContainer = document.getElementById('lateralUnityContent');
    //Accedemos a su ancho exacto
    let parentContainerAncho = parentContainer.offsetWidth - .5;

    //Importante... damos a el tab el ancho de el contenedor padre
    tabsContentElement.setAttribute('style', 'width: ' + parentContainerAncho + 'px;');
}

//Ejecutamos el ajuste en los tabs la primera vez que inicie la pagina
ajustarTamanoTabs();

//Ejecutamos la misma función, pero ahora en cada ocasión que el tamaño de la pantalla cambie
window.addEventListener('resize', function() {
    ajustarTamanoTabs();
});
  
//IMPORTANTE
/**
 * Sirve para volver a cargar el código de materialized 
 * para que las imagenes puedan tener zoom otra
 * vez
 */
//Accedemos al contenedor que tiene las opciones para el menu en computadora.
let buttonContentForImage = document.getElementById("lateralUnityMenuSectionContainer");
let buttonContentForImageMobile = document.getElementsByClassName("mobileOptionsContainer");

//Debemos refrescar los estilos con un retraso, para que primero se cargue el contenido y luego se refresquen los estilos.
//Si tiene dudas revisar el tema de Call stack del navegador
buttonContentForImage.addEventListener('click', () => {
    setTimeout(() => {
        $('.materialboxed').materialbox();

        //Reactivamos los tabs y ajustamos tamaño cuando se actualiza el contenido
        $('.tabs').tabs();
        ajustarTamanoTabs();
    }, 10);
});

//Lo mismo pero para los botones de moviles
for(var i = 0; i <= buttonContentForImageMobile.length; i++){
    buttonContentForImageMobile[i].addEventListener('click', () => {
        setTimeout(() => {
            $('.materialboxed').materialbox();

            //Reactivamos los tabs y ajustamos tamaño cuando se actualiza el contenido
            $('.tabs').tabs();
            ajustarTamanoTabs();
        }, 10);
    });
}
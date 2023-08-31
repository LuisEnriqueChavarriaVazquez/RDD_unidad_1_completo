let contenedorNotificaciones = document.getElementById('contenedorNotificaciones');
// document.addEventListener("selectstart", () => {
//     contenedorNotificaciones.innerHTML = `
//         <div id="notificacionMine">
//             No está permitido copiar contenido.
//         </div>
//     `;

//     setTimeout(() => {
//         $("#notificacionMine").fadeOut("slow");
//     }, 2000);

// });

//Agregamos las propiedades al documento para evitar la copia
let bodyCopy = document.getElementsByTagName('body');
bodyCopy[0].setAttribute('oncontextmenu', 'return false');
bodyCopy[0].setAttribute('ondragstart', 'return false');
bodyCopy[0].setAttribute('onselectstart', 'return false');

//Evitamos que entre a la consola
document.addEventListener("contextmenu", () => {
    M.toast({html: 'No esta permitido copiar o acceder a la consola.'});
});
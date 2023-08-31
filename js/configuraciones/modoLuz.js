//Botones para los cambios de color
let modOscuro = document.getElementById('modOscuro');
let iconModOscuro = document.getElementById('iconModOscuro');
let textModOscuro = document.getElementById('textModOscuro');

//Identificador para acceder a la ruta del color (ruta actual y futura)
let rutaColor = document.getElementById('colorAdaptable');

//Verifcamos que la ruta no este en memoria
let rutaSaved = localStorage.getItem('rutaSavedOn');
console.log('rutaSaved: ', rutaSaved);
if (rutaSaved === null){
    localStorage.setItem('rutaSavedOn', 'css/colors/standarColors.css');
    window.location.reload();
}

/*Debemos hacer una funcion que obtenga la URL para comprobar si estamos en la
página de la Unidad 1, 2, 3, 4, 5 y asi cargar los colores de esa unidad*/
let urlEsDeUnidad = () => {
    let urlActual = window.location.href;
    urlActual = urlActual.split("/").pop();
    return urlActual;
}

/* Debemos hacer una función que valide el nombre de la unidad y valide si estamos
en modo oscuro o en modo con luz */
function validarUnidadvalidarColor(){
    //Obtenemos el nombre de la unidad en la que estamos
    let unidadNombre = urlEsDeUnidad();
    //En esta variable irá la ruta del css de la unidad
    let cssDeLaUnidad;

    //Validamos si estamos en la página de alguna unidad
    if(unidadNombre.indexOf('unidad') != -1){
        //Guardamos la etiqueta de link para la ruta de CSS
        let unitColorsAdaptable = document.getElementById('unitColorsAdaptable');
        //Guardamos el nombre del archivo CSS segun el tono actual
        if(rutaSaved == 'css/colors/standarColors.css'){
            cssDeLaUnidad = 'css/colors/' + (unidadNombre.split(".").shift()).split("_").shift() + '/estilo_claro.css';
            console.log('cssDeLaUnidad: ', cssDeLaUnidad);
        }else if(rutaSaved == 'css/colors/standarDark.css'){
            cssDeLaUnidad = 'css/colors/' + (unidadNombre.split(".").shift()).split("_").shift() + '/estilo_oscuro.css';
            console.log('cssDeLaUnidad: ', cssDeLaUnidad);
        }
        //Definimos el archivo
        unitColorsAdaptable.setAttribute('href', cssDeLaUnidad);

    }else{
        console.log('Esta pagina no es de unidad');
    }
}

//Funcion para modificar el icono cuando sea modo oscuro o modo luz
function changeIconDarkMode(rutaColorOscuroLuz){
    //Actualizamos el icono de la interfaz que indica el brillo
    if(rutaColorOscuroLuz == 'css/colors/standarColors.css'){
        //Modificacion de estilos
        iconModOscuro.innerHTML = 'dark_mode';
        textModOscuro.innerHTML = 'Activar modo oscuro';
    }else if(rutaColorOscuroLuz == 'css/colors/standarDark.css'){
        //Modificacion de estilos
        iconModOscuro.innerHTML = 'light_mode';
        textModOscuro.innerHTML = 'Activar modo luz';
    }
}

//Validamos que los botones existan (Botones para configurar el color)
if(modOscuro !== null){
    
    //Definimos el color guardado en memoria
    rutaColor.setAttribute('href', rutaSaved);

    //Funcion para cambiar los iconos cada que inicie la página de acuerdo al modo
    changeIconDarkMode(rutaSaved);

    //Como los botones existen debemos agregar los eventos que esten a la escucha del cambio de color
    //Boton para el modo oscuro y modo lumninoso
    modOscuro.addEventListener('click', () => {
        if(localStorage.getItem('rutaSavedOn') == 'css/colors/standarColors.css'){
            M.toast({html: 'Modo oscuro activo'});
            localStorage.setItem('rutaSavedOn', 'css/colors/standarDark.css');
            rutaColor.setAttribute('href', 'css/colors/standarDark.css');

            //Modificacion de estilos
            iconModOscuro.innerHTML = 'light_mode';
            textModOscuro.innerHTML = 'Activar modo luz';

        }else{
            M.toast({html: 'Modo luminoso activo'});
            localStorage.setItem('rutaSavedOn', 'css/colors/standarColors.css');
            rutaColor.setAttribute('href', 'css/colors/standarColors.css');

            //Modificacion de estilos
            iconModOscuro.innerHTML = 'dark_mode';
            textModOscuro.innerHTML = 'Activar modo oscuro';
        }
    });

    /*Sirve para agregar los estilos de las unidades 1,2,3,4,5 dependiendo de si esta 
    en modo oscuro o modo con luz*/
    validarUnidadvalidarColor();
    
}else{

    //En caso de que no haya botones solo agregamos el color guardado en memoria
    rutaColor.setAttribute('href', rutaSaved);

    /*Sirve para agregar los estilos de las unidades 1,2,3,4,5 dependiendo de si esta 
    en modo oscuro o modo con luz*/
    validarUnidadvalidarColor();

}

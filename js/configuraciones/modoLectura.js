//Botones para los cambios de tono sepia
let modSepia = document.getElementById('modSepia');
let iconModSepia = document.getElementById('iconModSepia');

//Verifcamos que el valor del tono sepia exista
let sepiaValue = localStorage.getItem('sepiaValue');

//Accedemos a la ETIQUETA HTML
let generalDocument = document.getElementById('generalDocument');

//En caso de que no exista
if (sepiaValue === null){
    localStorage.setItem('sepiaValue', '0.0');
    generalDocument.setAttribute('style', 'filter: sepia(0.0);');
    sepiaValue = localStorage.getItem('sepiaValue');
}

//Funcion para modificar el icono cuando el brillo cambia
function changeIconSepia(valueSepia){
    //Actualizamos el icono de la interfaz que indica el brillo
    if(valueSepia == '0'){
        iconModSepia.innerHTML = 'brightness_7';
    }else if(valueSepia == '1'){
        iconModSepia.innerHTML = 'brightness_6';
    }else if(valueSepia == '2'){
        iconModSepia.innerHTML = 'brightness_5';
    }else if(valueSepia == '3'){
        iconModSepia.innerHTML = 'brightness_4';
    }
}

//En caso de que el boton exista se debe actualizar el valor en tiempo real
if(modSepia !== null){
    
    //Debemos poner en la barra el valor actual
    let valorInputSepia = localStorage.getItem('sepiaValue') * 10;
    modSepia.value = valorInputSepia;

    //Cambiamos el icono cada que entramos a la página
    changeIconSepia(valorInputSepia);
    
    //Debemos escuchar cuando el usario modifique el valor
    modSepia.addEventListener('change', () => {
        //Obtenemos el valor del input range
        let valorDeUsuarioSepia = modSepia.value;

        //Cambiamos el icono cada que ajustamos el brillo
        changeIconSepia(valorDeUsuarioSepia);

        //Divimos la cantidad dada por el usuario para obtener decimales
        valorDeUsuarioSepia = valorDeUsuarioSepia/10;

        //Actualizamos el valor en memoria
        localStorage.setItem('sepiaValue', valorDeUsuarioSepia);
        //Obtenemos el nuevo valor de la memoria
        sepiaValue = localStorage.getItem('sepiaValue');
        //Aplicamos los estilos guardados en memoria
        generalDocument.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
    });

    //Aplicamos los estilos guardados en memoria
    generalDocument.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
    
}else{ //En caso de que el boton de selección de sepia no exista solo se pone el valor en memoria

    //Aplicamos los estilos guardados en memoria
    generalDocument.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
}
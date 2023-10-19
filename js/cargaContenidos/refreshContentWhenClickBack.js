setTimeout( () => {
    // Obtiene la URL actual del navegador
    const url = window.location.href;
    
    // Divide la URL por el carácter "/" y toma el último elemento
    const partes = url.split('/');
    const textoDespuesDelUltimoSlash = partes[partes.length - 1];
    
    // Verifica si urlActualRetorno existe y no es 'unidad1.html' en el Local Storage
    const urlActualRetorno = localStorage.getItem('urlActualRetorno');
    
    if (urlActualRetorno === null || urlActualRetorno !== 'unidad1.html') {
        // Si urlActualRetorno no existe o es diferente de 'unidad1.html', guárdalo y recarga la página
        localStorage.setItem('urlActualRetorno', textoDespuesDelUltimoSlash);
        //alert('reload')
        location.reload();
    } else {
        // Si urlActualRetorno es igual a 'unidad1.html', guárdalo en el Local Storage
        localStorage.setItem('urlActualRetorno', textoDespuesDelUltimoSlash);
    }
}, 1000);

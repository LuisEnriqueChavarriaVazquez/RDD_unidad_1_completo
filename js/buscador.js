function buscar_concepto() {
    let criterio = document.getElementById('inputBrowser').value;
    criterio = criterio.toLowerCase();
    let items = $('.conceptCard');

    // Contenido cuando no se encuentra nada
    let noResultContent = document.getElementById('noResultContent');

    let resultadosEncontrados = false; //bandera para saber si se encontraron resultados

    for (item = 0; item < items.length; item++) {
        if (items[item].innerHTML.toLowerCase().includes(criterio)) {
            items[item].style.display = "grid";
            resultadosEncontrados = true; // Se encontró al menos un resultado
        } else {
            items[item].style.display = "none";
        }
    }

    // Mostrar u ocultar noResultContent basado en si se encontraron resultados
    if (resultadosEncontrados) {
        noResultContent.style.display = "none"; 
    } else {
        noResultContent.style.display = "grid"; 
    }
}

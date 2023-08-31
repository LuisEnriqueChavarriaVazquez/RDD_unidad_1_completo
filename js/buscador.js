function buscar_concepto(){
    let criterio=document.getElementById('inputBrowser').value; 
    criterio=criterio.toLowerCase();
    let items=$('.conceptCard')

    //Caja de conceptos
    let parentConceptsGlosario = document.getElementById('parentConceptsGlosario');
    
    //Contenido cuando no se encuentra nada
    let noResultContent = document.getElementById('noResultContent');

    for(item=0;item<items.length;item++){
        if (!items[item].innerHTML.toLowerCase().includes(criterio)) {
            items[item].style.display="none";

            //Card de no hay resultados
            noResultContent.style.display = "grid";  
        }else {
            items[item].style.display="grid";
            
            //Quitamos la card de buscador
            noResultContent.style.display = "none";              
        }
    }
}
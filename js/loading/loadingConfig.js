//Pantalla de carga
document.onreadystatechange = function(event) {
    if (document.readyState === "complete") {
        setTimeout(()=>{
            //Quitamos el loader de la página
            $(".loadContentScreen").fadeOut("slow");
            setTimeout(()=>{
                //Mostramos el contenido
                $(".readyContentScreen").removeClass("readyContentScreen");
            },500)
        },100)
    }
};

//Insertar elementos en los contenedores de carga
let containerCarga = document.getElementsByClassName('loadContentScreen'); //Contenedores de carga
containerCarga = [...containerCarga]; //Conversion en array
//Diseños de contenedores de carga shimmer
let contentLoadHtml = 
[
    `
    <div class="loadingContactShimmerConfig">
        <div class="clgreyl2 shimmer loadingContact"></div>
        <div class="clgreyl2 shimmer loadingContact"></div>
    </div>
    `

];


//Insertar diseños de shimmer en los contenedores de forma aleatoria
let insertarElementosCarga = () => {    
    containerCarga.forEach(element => {
        element.innerHTML = contentLoadHtml[0];
    });
}

insertarElementosCarga();
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
    <div class="loadingTextShimmerContainer">
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
    </div>

    <div class="loadingBoxShimmerContainer">
        <div class="clgreyl2 shimmer loadingBoxShimmer"></div>
    </div>

    <div class="loadingTextShimmerContainer">
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
    </div>
    `,
    `
    <div class="loadingTextShimmerContainer">
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
    </div>

    <div class="loadingBoxShimmerContainer">
        <div class="clgreyl2 shimmer loadingBoxShimmer"></div>
    </div>

    <div class="loadingTextShimmerContainer">
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
    </div>

    <div class="loadingBoxShimmerContainer">
        <div class="clgreyl2 shimmer loadingBoxShimmer"></div>
    </div>
    
    `,
    `
    <div class="loadingBoxShimmerContainer">
        <div class="clgreyl2 shimmer loadingBoxShimmer"></div>
    </div>

    <div class="loadingTextShimmerContainer">
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
        <div class="clgreyl2 shimmer loadingText"></div>
    </div>

    <div class="loadingBoxShimmerContainer">
        <div class="clgreyl2 shimmer loadingBoxShimmer"></div>
    </div>
    `, 

];

//Funcion para numeros aleatorios
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Insertar diseños de shimmer en los contenedores de forma aleatoria
let insertarElementosCarga = () => {    
    containerCarga.forEach(element => {
        element.innerHTML = contentLoadHtml[getRandomInt(3)];
    });
}

insertarElementosCarga();
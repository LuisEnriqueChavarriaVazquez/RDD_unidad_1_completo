let titleSectionManual = document.getElementById('titleSectionManual');

let scrollDown, scrollUp;
window.onscroll = function () {
    scrollDown = window.scrollY;
    scrollUp = window.scrollX;

    //Para cuando iniciamos la página y el usuario aún no hace scroll
    detectarNombreDeSeccion();

    if(scrollDown >= 164){
        titleSectionManual.classList.add('shadow8', 'stickyHeaderManual', 'cl3');
        titleSectionManual.classList.remove('cl2');
        detectarNombreDeSeccion();
    }else{
        titleSectionManual.classList.remove('shadow8', 'stickyHeaderManual', 'cl3');
        titleSectionManual.classList.add('cl2');
    }
};

//Lo que se hace aqui es detectar el nombre de la sección sobre la que estamos
function detectarNombreDeSeccion(){
    let scrollSpyContainer = document.getElementById('scrollSpyContainer');
    let containerChildren = scrollSpyContainer.children;
    containerChildren = [...containerChildren];
    let activeElement = containerChildren.filter((children) => {
        let hijoDeLi = children.children;
        //console.log(hijoDeLi[0].classList.contains('active'))
        if(hijoDeLi[0].classList.contains('active')){
            return hijoDeLi[0];
        }
    })
    titleSectionManual.innerText = activeElement[0].innerText;
}

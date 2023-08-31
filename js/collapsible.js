//Accedemos al elementos
let collapsibleHeader = document.getElementsByClassName('collapsible-header');
for(var i = 0; i <= collapsibleHeader.length; i++){
    collapsibleHeader[i].addEventListener('click', (event) => {
        let elemento = event.target;
        if(elemento.classList.contains('collapsible-header-clicked')){
            elemento.classList.remove('collapsible-header-clicked');
        }else{
            elemento.classList.add('collapsible-header-clicked');
        }
    })
}
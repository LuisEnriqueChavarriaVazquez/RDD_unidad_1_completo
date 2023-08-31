///////////////////////////////////NUMERO DE INTENTOS
//Validacion si no existe el nombre y el grupo
if (localStorage.getItem('nombreAlumno') === null) {
    localStorage.setItem('nombreAlumno', "");
}

if (localStorage.getItem('grupoAlumno') === null) {
    localStorage.setItem('grupoAlumno', "");
}

if (localStorage.getItem('estadoDatosPersonalesAlumno') === null) {
    localStorage.setItem('estadoDatosPersonalesAlumno', "vacio");
}

//Vaciamos lo que se tenga almacenado en los inputs
let nombreAlumno = localStorage.getItem('nombreAlumno');
let nombreAlumnoInput = document.getElementById('nombreAlumnoInput');
nombreAlumnoInput.value = nombreAlumno;
nombreAlumnoInput.focus();

let grupoAlumno = localStorage.getItem('grupoAlumno');
let grupoAlumnoInput = document.getElementById('grupoAlumnoInput');
grupoAlumnoInput.value = grupoAlumno;
grupoAlumnoInput.focus();

//Guardamos el button
let guardarDatosButton = document.getElementById('guardarDatos');

//Validacion del button de guardado
function validarButtonDatosPersonales(){
    //Dependiendo del estado actual el boton se actualizara
    if(localStorage.getItem('estadoDatosPersonalesAlumno') == 'guardado'){
        //Editamos el button
        guardarDatosButton.innerHTML = `Editar datos<i class="material-icons right">edit</i>`;
        nombreAlumnoInput.setAttribute('disabled','');
        nombreAlumnoInput.classList.remove('clbktx');
        grupoAlumnoInput.setAttribute('disabled','');
        grupoAlumnoInput.classList.remove('clbktx');
        
    }else if(localStorage.getItem('estadoDatosPersonalesAlumno') == 'vacio'){
        
        //Editamos el button
        guardarDatosButton.innerHTML = `Guardar datos<i class="material-icons right">save</i>`;
        nombreAlumnoInput.removeAttribute('disabled','');
        nombreAlumnoInput.classList.add('clbktx');
        grupoAlumnoInput.removeAttribute('disabled','');
        grupoAlumnoInput.classList.add('clbktx');
    }
    return localStorage.getItem('estadoDatosPersonalesAlumno');
};
validarButtonDatosPersonales();


//Accedemos al boton de guardar datos
guardarDatosButton.addEventListener('click', () => {

    //Validamos que los campos tengan contenido

    if(nombreAlumnoInput.value == "" || grupoAlumnoInput.value == ""){
            
            //Retroalimentamos al usuario
            M.toast({html: `Campos vacios 🖋️`});
            
        }else{
            
            //Guardamos en local storage el dato
            localStorage.setItem('nombreAlumno', nombreAlumnoInput.value);
            localStorage.setItem('grupoAlumno', grupoAlumnoInput.value);
            
            //Hacemos que quede dentro del input
            nombreAlumnoInput.value = localStorage.getItem('nombreAlumno');
            grupoAlumnoInput.value = localStorage.getItem('grupoAlumno');
            
            //Hacemos la validacion del button de guardado
        let valorActual = validarButtonDatosPersonales();
        if(valorActual == 'guardado'){
            localStorage.setItem('estadoDatosPersonalesAlumno', "vacio");
            validarButtonDatosPersonales();
            
            //Retroalimentamos al usuario
            M.toast({html: `Edite los campos 🖋️`});
        }else{
            localStorage.setItem('estadoDatosPersonalesAlumno', "guardado");
            validarButtonDatosPersonales();
            
            //Retroalimentamos al usuario
            M.toast({html: `Datos guardados ✅`});
        }
        
        
    }
    

})
//Accedemos al elemento para poner la probabilidad
let dato_intentos_examen = document.getElementById('dato_intentos_examen');

//Obtenemos los intentos de la memoria
let intentos = [
    parseInt(localStorage.getItem('i1')), 
    parseInt(localStorage.getItem('i2')),
    parseInt(localStorage.getItem('i3')), 
    parseInt(localStorage.getItem('i4')), 
    parseInt(localStorage.getItem('i5'))
];

//Filtramos en caso de que haya sin contestar
let intentosFiltrado = intentos.filter( intento => !isNaN(intento));

//Sacamos la suma de los intentos
let sumaIntentos = intentosFiltrado.reduce((e, i) => {
    return e + i;
});

//Ponemos el valor en la interfaz
dato_intentos_examen.textContent = (sumaIntentos/intentosFiltrado.length).toFixed(1);
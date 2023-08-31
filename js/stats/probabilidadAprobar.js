//Accedemos al elemento para poner la probabilidad
let dato_probabilidad_pasar = document.getElementById('dato_probabilidad_pasar');

//Obtenemos los promedio de la memoria
let promedios = [
    (localStorage.getItem('p1')*10)/20, 
    (localStorage.getItem('p2')*10)/20,
    (localStorage.getItem('p3')*10)/20, 
    (localStorage.getItem('p4')*10)/20, 
    (localStorage.getItem('p5')*10)/20
];

//Filtramos solo aquellos que sean numero
let promediosFiltrados = promedios.filter( promedio => promedio != NaN);
console.log('promediosFiltrados: ', promediosFiltrados);

//Establecemos el promedio minimo
const promedioMinimo = 6;

//Calculamos la probabilidad
const promediosAprobatorios = promediosFiltrados.filter(promedio => promedio >= promedioMinimo);
const probabilidadAprobatoria = (promediosAprobatorios.length / promediosFiltrados.length)*100;

dato_probabilidad_pasar.textContent = `${probabilidadAprobatoria}`;
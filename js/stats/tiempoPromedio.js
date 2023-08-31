//Accedemos al elemento para poner la probabilidad
let dato_tiempoPromedio = document.getElementById('dato_tiempoPromedio');
console.log('dato_tiempoPromedio: ', dato_tiempoPromedio);

//Obtenemos los mins/horas de la memoria
let mins_promedio = [
    parseInt(localStorage.getItem('m1')), 
    parseInt(localStorage.getItem('m2')),
    parseInt(localStorage.getItem('m3')), 
    parseInt(localStorage.getItem('m4')), 
    parseInt(localStorage.getItem('m5'))
];
console.log('mins_promedio: ', mins_promedio);

let horas_promedio = [
    parseInt(localStorage.getItem('h1')), 
    parseInt(localStorage.getItem('h2')),
    parseInt(localStorage.getItem('h3')), 
    parseInt(localStorage.getItem('h4')), 
    parseInt(localStorage.getItem('h5'))
];
console.log('horas_promedio: ', horas_promedio);

//Filtramos cuando aun no hay un tiempo definido
let horasFilter = horas_promedio.filter(hora => !isNaN(hora));
let minutosFilter = mins_promedio.filter(minuto => !isNaN(minuto));

//Sumamos las horas y minutos
let horasSuma = horasFilter.reduce((e,i) => e+i);
let horasSumaToMin = horasSuma*60;
let minutosSuma = minutosFilter.reduce((e,i) => e+i);

//Sacamos el promedio
let promedioTiempoStat = ((horasSumaToMin + minutosSuma)/minutosFilter.length).toFixed(1);

//Tiempo promedio
dato_tiempoPromedio.textContent = promedioTiempoStat;
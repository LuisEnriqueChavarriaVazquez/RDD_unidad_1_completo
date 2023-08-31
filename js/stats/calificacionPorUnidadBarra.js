//Accedemos al contenedor de las calificaciones
let barraGraficaStats1 = document.getElementById('unidad1CalificacionBarra');
console.log('barraGraficaStats1: ', barraGraficaStats1);
let barraGraficaStats2 = document.getElementById('unidad2CalificacionBarra');
let barraGraficaStats3 = document.getElementById('unidad3CalificacionBarra');
let barraGraficaStats4 = document.getElementById('unidad4CalificacionBarra');
let barraGraficaStats5 = document.getElementById('unidad5CalificacionBarra');

//Ponemos los datos dentro
barraGraficaStats1.setAttribute('style', `width: ${((localStorage.getItem('p1')*10)/20)*10}%`);
barraGraficaStats2.setAttribute('style', `width: ${((localStorage.getItem('p2')*10)/20)*10}%`);
barraGraficaStats3.setAttribute('style', `width: ${((localStorage.getItem('p3')*10)/20)*10}%`);
barraGraficaStats4.setAttribute('style', `width: ${((localStorage.getItem('p4')*10)/20)*10}%`);
barraGraficaStats5.setAttribute('style', `width: ${((localStorage.getItem('p5')*10)/20)*10}%`);
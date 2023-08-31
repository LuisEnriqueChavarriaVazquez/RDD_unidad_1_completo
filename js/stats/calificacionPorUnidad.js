//Accedemos al contenedor de las calificaciones
let calU1Stats = document.getElementById('calU1Stats');
let calU2Stats = document.getElementById('calU2Stats');
let calU3Stats = document.getElementById('calU3Stats');
let calU4Stats = document.getElementById('calU4Stats');
let calU5Stats = document.getElementById('calU5Stats');

//Ponemos los datos dentro
calU1Stats.textContent = (localStorage.getItem('p1')*10)/20;
calU2Stats.textContent = (localStorage.getItem('p2')*10)/20;
calU3Stats.textContent = (localStorage.getItem('p3')*10)/20;
calU4Stats.textContent = (localStorage.getItem('p4')*10)/20;
calU5Stats.textContent = (localStorage.getItem('p5')*10)/20;
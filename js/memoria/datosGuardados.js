//Ayuda a conocer el tamaño de cada cosa en local storage
function conocerTamanoDeCadaCosaEnMemoria(){
    var _lsTotal = 0,
    _xLen, _x;
    console.log("------------------------------");
    for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
        console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
    };
    console.log("------------------------------");
    console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
}
conocerTamanoDeCadaCosaEnMemoria();

//Ayuda a conocer si localStorage esta disponible en el navegador
function isLocalStorageAvailable(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

if(isLocalStorageAvailable()){
    // available
    console.log("------------------------------");
    console.log('available');
}else{
    // unavailable
    console.log("------------------------------");
    console.log('unavailable');
}

//Ayuda a conocer el tamaño total disponible en el navegador
function gen(n) {
    return new Array((n * 1024) + 1).join('a')
}
 
// Determine size of localStorage if it's not set
if (!localStorage.getItem('size')) {
    var i = 0;
    try {
        // Test up to 10 MB
        for (i = 0; i <= 10000; i += 250) {
            localStorage.setItem('test', gen(i));
        }
    } catch (e) {
        localStorage.removeItem('test');
        localStorage.setItem('size', i ? i - 250 : 0);
    }
}

console.log("------------------------------");
console.log('Total size max KBs: ', localStorage.getItem('size'));


let valueEx = `
    
`;
localStorage.setItem('ejemplo', valueEx)
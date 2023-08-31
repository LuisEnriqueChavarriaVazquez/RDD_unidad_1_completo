////////////////////////////////////////////////////////////////////////
//Mezclador de arrays
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // Mientras tengamos elementos para mezclar
    while (currentIndex != 0) {
  
      // Escoje a uno de los elementos
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Intercambialo con el elemento actual
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
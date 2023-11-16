//Join, el método join() de las instancia de array, crea y devuelve una nueva cadena concatenando todos
//todos los elementos de esa matriz, separando por comas o una cadena de separación especifica.

const elements=["fire", "Air", "Water"];
let answer= ' ';
const separator= '--';
for(let index= 0; index < elements.length; index ++){
  const item=elements[index];
  if(index === elements){
    answer= answer + item;
  } else{
    answer = answer + item + separator;
  }
}
console.log('for',answer);

//Método join
const metodoJoin=elements.join('--');
console.log('Método Join',metodoJoin);

//Otro ejemplo utilizando.
const title='Curso de manipulacion de arrays';
const urlFinal=title.split(' ').join('-').toLowerCase();
console.log('otro ejemplo',urlFinal);
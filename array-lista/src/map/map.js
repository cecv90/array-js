//Método map transforma a un nuevo array siempre va a tener el mismo número de elementos.
const letters =['a','b','c','d'];
/*const newArray=[];
for(let index=0; index <letters.length; index++){
  const element=letters[index];
  newArray.push(element + '++')
}
console.log('original',letters);
console.log('new Array', newArray)*/

//Método map.
const newArray=letters.map(item => item + '++');
console.log('original',letters);
console.log('new Array', newArray)


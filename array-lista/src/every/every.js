//El método every() en JavaScript se utiliza para comprobar si todos los elementos de un array 
//satisfacen cierta condición. Devuelve true si todos los elementos cumplen con la condición dada; de 
//lo contrario, devuelve false. A diferencia del método some(), que verifica si al menos un elemento 
//cumple con la condición, every() verifica que todos los elementos cumplan con la condición.

//Declaramos una variable y asignamos un valor.
const number=[1,2,3,4,5,6];
const boolean =true;
for(let index = 0; index < number.length; index++){
  const element = number[index];
  if(element >= 7){
    boolean = false
  }
}
console.log('For',boolean);
//true

const metodoEvery=number.every(item => item <= 7);
console.log('Método every',metodoEvery);
//true
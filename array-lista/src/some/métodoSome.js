//El método some() comprueba si al menos un elemento del array cumple con la condición 
//implementada por la función proporcionada.
//Asignar una variable con un array de números.
const number=[1,2,4,5];
//Método some
const anwser=number.some(item => item % 2 === 0);
console.log('answer', anwser);

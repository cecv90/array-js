//El método find de JavaScript es una función que te permite buscar el primer elemento de un array que 
//cumpla con una condición. La condición se define mediante una función de callback que se pasa como 
//argumento al método find. La función de callback recibe tres parámetros: el elemento actual del array, 
//su índice y el array completo. El método find devuelve el valor del elemento encontrado o undefined 
//si no se encuentra ninguno. Aquí tienes algunos ejemplos de cómo usar el método find de JavaScript:
//for
const number=[1,2,3,4,5,6,7,8,9];
let answer=undefined;
for(let index= 0;index < number.length; index++){
  const element =number[index];
  if(element === 3){
    answer = element
    break;
  }
}
console.log('Bucle for',answer);

//Método find.
const metodoFind = number.find(item => item === 9);
console.log('Método find', metodoFind);

// otro ejemplo
let numeros = [1, 3, 5, 7, 8, 9];
let par = numeros.find(numero => numero % 2 === 0);
console.log('otro ejemplo',par); // 8

//El método findIndex de JavaScript es una función que te permite buscar el índice del primer elemento 
//de un array que cumpla con una condición. La condición se define mediante una función de callback 
//que se pasa como argumento al método findIndex. La función de callback recibe tres parámetros: el 
//elemento actual del array, su índice y el array completo. El método findIndex devuelve el índice del 
//elemento encontrado,
let personas = [
{ nombre: "Ana", edad: 25 },
{ nombre: "Carlos", edad: 30 },
{ nombre: "Elena", edad: 35 },
];
let mayorDe30 = personas.findIndex(persona => persona.edad > 30);
console.log(mayorDe30); // { nombre: "Elena", edad: 35 }


let frutas = ["manzana", "plátano", "cereza", "durazno"];
let cereza = frutas.findIndex(fruta => fruta === "cereza");
console.log(cereza); // "cereza"


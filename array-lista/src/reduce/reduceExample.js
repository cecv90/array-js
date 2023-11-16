//Reduce, coje un array y lo reduce a un solo valor. Con reduce tenemos que enviar 2 parametros.

//Array de número.
const totals=[1,2,3,4,5,6,7,8,9];
/*Asignar un variable
let sum =0;
Crear un bucle for para interar sobre los elementos.
*for(let index= 0; index < totals.length; index++){
  const element=totals[index];
  sum = sum + element;
}
console.log(sum);*/

//Utilizando el método reduce.
const answer = totals.reduce((sum, item) => sum + item, 0);
console.log(answer);

/*El método reduce() en JavaScript se utiliza principalmente para reducir un array a un solo valor. 
Funciona aplicando una función a cada elemento del array, acumulando el resultado para obtener un único 
valor de retorno.

La sintaxis del método reduce() es la siguiente:

array.reduce(function(acumulador, elementoActual, índice, array) {
  // Lógica para reducir y acumular los valores
}, valorInicial);
acumulador: Es el valor acumulado que se va actualizando en cada iteración.
elementoActual: El elemento actual del array en cada iteración.
índice (opcional): La posición del elemento actual.
array (opcional): El array al que pertenece el elemento actual.
valorInicial (opcional): Es el valor inicial o inicializador del acumulador. Si se omite, el primer 
elemento del array se tomará como valor inicial y la función de reducción comenzará desde el segundo 
elemento.
Aquí hay un ejemplo simple de cómo podrías usar reduce() para sumar todos los elementos de un array:*/


const array = [1, 2, 3, 4, 5];

const suma = array.reduce((acumulador, elementoActual) => {
  return acumulador - elementoActual;
}, 0);

console.log(suma); // Resultado: 15 (1 + 2 + 3 + 4 + 5 = 15)

/*En este ejemplo:Acumulador comienza en 0 (especificado como segundo argumento de reduce()).
elementoActual toma los valores del array uno por uno.
La función suma el acumulador con cada elementoActual, y al final, devuelve la suma total.
Puedes utilizar reduce() para realizar otras operaciones, como encontrar el máximo o mínimo, 
filtrar elementos, concatenar strings, etc. El uso específico depende de la lógica que definas dentro 
de la función que pasas como argumento a reduce().*/



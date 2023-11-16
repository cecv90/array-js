//método sort de javascript
//El método sort() en JavaScript se utiliza para ordenar los elementos de un array.
//Por defecto, sort() convierte los elementos del array a cadenas de texto y los 
//ordena de acuerdo con los valores de Unicode de esos caracteres.
//Aquí tienes un ejemplo básico de cómo usar sort():

const numbers = [4, 2, 7, 1, 9];
// Ordenar los elementos en orden ascendente
const ascendingOrder = numbers.sort();
console.log('test', ascendingOrder);  // Salida: [1, 2, 4, 7, 9]

// Para ordenar en orden descendente, puedes usar una función de comparación
const descendingOrder = numbers.sort((a, b) => b - a);
console.log('test1',descendingOrder); // Salida: [9, 7, 4, 2, 1]
//Observa que para ordenar en orden descendente, se proporciona una función de comparación que resta b 
//de a. Esta función de comparación determina el orden de clasificación basándose en si el resultado es 
//negativo, cero o positivo.
//Es importante tener en cuenta que el método sort() ordena los elementos directamente en el array y 
//devuelve una referencia al array ordenado. Esto significa que el array original se modifica. 
//Si deseas evitar modificar el array original, puedes crear una copia antes de ordenarlo, por ejemplo, 
//utilizando el operador de propagación (...) o el método slice().

const originalArray = [4, 2, 7, 1, 9];
// Crear una copia antes de ordenar
const sortedArray = [...originalArray].sort((a, b) => a - b);
console.log('test2',originalArray); // El array original permanece sin cambios
console.log('test3',sortedArray);   // Salida: [1, 2, 4, 7, 9]

//Recuerda adaptar la función de comparación según tus necesidades específicas, especialmente cuando estás trabajando con tipos de datos más complejos o arrays de objetos.
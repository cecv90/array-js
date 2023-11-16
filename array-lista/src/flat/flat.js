const arrayAnidados=[1,2,[3,4,[5,6]]];
const metodoFlat=arrayAnidados.flat(2);
console.log(metodoFlat);

flat 
//La función flat() en JavaScript se utiliza para "aplanar" un array, es decir, para eliminar la 
//anidación de arrays dentro de un array, combinando todos los elementos en un solo array. Esto es útil 
//cuando tienes arrays anidados y deseas obtener un único array que contenga todos los elementos.

//La función flat() tiene la siguiente sintaxis:
const nuArray = array.flat(parametro);

//array, es el array que quieres aplanar.
//Parámetro, opcional que indica la profundidad máxima de anidamiento que se debe aplanar. 
//Por defecto, es 1.
//Ejemplo 
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Resultado: [1, 2, 3, 4, [5, 6]]
//En este ejemplo, flat() ha aplanado el array una sola vez. Si desearas aplanar completamente cualquier 
//nivel de anidamiento, podrías hacerlo especificando un número mayor o pasando Infinity como argumento:

//Ejemplo
const deeplyNestedArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const completelyFlattened = deeplyNestedArray.flat(Infinity);
console.log(completelyFlattened); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8]
//Es esencial tener en cuenta que flat() no modifica el array original, sino que devuelve un nuevo array 
//aplanado con los elementos combinados según la profundidad especificada.


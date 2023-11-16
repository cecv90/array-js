//flatmap, La función flatMap() en JavaScript es una combinación de dos operaciones de array: map() y flat(). 
//flatMap() primero mapea cada elemento de un array utilizando una función de mapeo y luego aplana el 
//resultado en un nuevo array.
//La sintaxis de flatMap() es la siguiente:

//const newArray = array.flatMap()

//array es el array que se va a mapear y aplanar.
//callback es una función que se ejecuta en cada elemento del array, que puede contener tres argumentos: currentValue (el valor actual que se está procesando), index (el índice del valor actual) y array (el array original).
//La función callback debe devolver un nuevo array o un valor. En el caso de flatMap(), si devuelve un 
//array, este se aplanará en el nuevo array resultante.
//Por ejemplo:

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multipliedAndFlattened = arrays.flatMap((value,) => [value * 2, value * 3]);
console.log(multipliedAndFlattened); 

//En este ejemplo, flatMap() multiplica cada elemento del array por 2 y por 3, devolviendo un nuevo 
//array con los elementos resultantes aplanados en un solo array.
//Es importante destacar que flatMap() no modifica el array original, sino que crea un nuevo array 
//resultante basado en la función proporcionada y aplanando los resultados si la función de mapeo 
//devuelve arrays anidados.
//Ejemplo:

const arrayss=[1,2,3,4,[5,6,7,8,9]];
const aplanarArray=arrayss.flatMap((element) => (Array.isArray(element) ? element:[element]));
console.log('Método flatmap',aplanarArray); //Método flatmap [1, 2, 3, 4, 5,6, 7, 8, 9]

//En este ejemplo, se utiliza un operador ternario para verificar si el elemento es un array. Si es así, 
//se devuelve tal cual; de lo contrario, se envuelve en un array. La función flatMap() automáticamente 
//aplanará el resultado, produciendo el array deseado 

//Array.isArray es una función en JavaScript que se utiliza para verificar si un valor dado es un objeto 
//de tipo array. Devuelve true si el valor proporcionado es un array y false en caso contrario.
// Aquí tienes un ejemplo de uso de Array.isArray:
//Ejemplo

const array = [1, 2, 3];
console.log(Array.isArray(array)); // Devuelve true
const noArray = "Hola, soy una cadena";
console.log(Array.isArray(noArray)); // Devuelve false

//En el primer ejemplo, Array.isArray(array) devuelve true porque array es una instancia de la clase 
//Array. En el segundo ejemplo, Array.isArray(noArray) devuelve false porque noArray es simplemente 
//una cadena y no un array. Esta función es útil para verificar el tipo de un valor antes de realizar 
//operaciones específicas que solo deberían aplicarse a arrays. Ayuda a evitar errores y a escribir 
//código más robusto.
//Otra forma de escribri el código.

const array1=[1,2,3,[4,5,6,[7,8,9]]];
const aplanadorArray1=(array1) => array1.flatMap((element) => {
  if(Array.isArray(element)){
    return aplanadorArray1 (element);
  } else {
    return [element] 
  }
});
const aplanandoArray = aplanadorArray1(array1);
console.log('Método flatMap con recursividad', aplanandoArray); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Para manejar más niveles de anidamiento, puedes utilizar la recursividad en combinación con 
//flatMap(). Aquí tienes un ejemplo que maneja varios niveles de anidamiento:
// En este ejemplo, la función utiliza la recursividad para manejar cualquier nivel de 
//anidamiento. La función flatMap() se llama de manera recursiva si se encuentra un subarray, y si no, 
//simplemente agrega el elemento al array resultante.
//Este enfoque te permitirá manejar arrays con cualquier cantidad de niveles de anidamiento. Ten en 
//cuenta que, en la práctica, debes tener en cuenta la posibilidad de que los niveles de anidamiento 
//sean demasiado profundos para evitar desbordamientos de la pila de llamadas (stack overflow).

//flatMap() para manipular objetos. Supongamos que tienes un array de objetos y quieres realizar una 
//operación de mapeo que, para cada objeto, genere un nuevo array de valores y luego aplane el resultado 
//en un solo array. Puedes usar flatMap() para lograr esto de manera concisa.

const personas = [
{ nombre: 'Juan', habilidades: ['JavaScript', 'React'] },
{ nombre: 'María', habilidades: ['HTML', 'CSS', 'JavaScript'] },
{ nombre: 'Carlos', habilidades: ['Node.js', 'Express'] }
];
// Usando flatMap para obtener un array plano de todas las habilidades
const aplanandoArray1=personas.flatMap(persona => persona.habilidades);
console.log('Método flatmap para manipular objects',aplanandoArray1); // Resultado: ['JavaScript', 'React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']

//En este ejemplo, flatMap() se utiliza para mapear cada objeto en el array personas a su array de 
//habilidades y luego aplanar esos arrays en uno solo. El resultado es un array que contiene todas las 
//habilidades de todas las personas.
//Este enfoque es especialmente útil cuando trabajas con estructuras de datos más complejas y quieres 
//extraer y combinar ciertos valores de manera elegante y eficiente.
//No cambia el array original es inmutable si no que crea uno nuevo con los elementos que cumple con la condición, filtra los elementos con un array con base a un condicional, los elementos que cumple con la condición.

//Creando un arreglo.
const words=['map', 'javascript', 'object', 'reactNative'];
//Utilizando el método filter para encontrar palabrar mayor a 6 letras.
const filter=words.filter(item => item.length >= 6);
console.log("Método filter", filter);


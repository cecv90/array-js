//En JavaScript, los arrays son estructuras de datos que pueden contener elementos de diversos tipos y 
//pueden ser modificados, lo que significa que son mutables. Esto permite agregar, eliminar y modificar 
//elementos en un array después de su creación. Aquí hay algunos ejemplos de cómo trabajar con arrays 
//mutables en JavaScript:
let miArray = [1, 2, 3, 4, 5];// Acceso y Modificación de Elementos:
console.log(miArray[2]); // Acceder al tercer elemento (índice 2)
miArray[1] = 10; // Modificar el segundo elemento
console.log(miArray); // Imprimir el array modificado
miArray.push(6); // Agregar un elemento al final del array
miArray.unshift(0); // Agregar un elemento al principio del array
console.log(miArray);
miArray.pop(); // Eliminar el último elemento del array
miArray.shift(); // Eliminar el primer elemento del array
console.log(miArray);

//Cortar y Modificar Partes del Array
let miArray = [1, 2, 3, 4, 5]
let parteDelArray = miArray.slice(1, 4); // Obtener elementos desde el índice 1 hasta el 3 (no incluido el 4)
console.log(parteDelArray);
miArray.splice(2, 1, 100); // Eliminar 1 elemento desde el índice 2 y agregar 100 en su lugar
console.log(miArray);
//Estos son solo algunos ejemplos básicos. JavaScript proporciona muchas más funciones y métodos para 
//manipular arrays de manera efectiva, como map, filter, reduce, entre otros. La mutabilidad de los 
//arrays en JavaScript es fundamental para su flexibilidad y utilidad en diferentes situaciones.

//Otros ejemplos:
//Este ejemplo en JavaScript trata con un array de productos (products) y otro array vacío (myProducts).
//La idea principal es mover un producto específico (en este caso, la hamburguesa con el identificador
//'🍔') de products a myProducts. Vamos a desglosar el código paso a paso:

// Definición de los arrays de productos
const products = [
  {
    title: 'pizza',
    price: 10,
    id: '🍕',
  },
  {
    title: 'burger',
    price: 20,
    id: '🍔',
  },
  {
    title: 'hot cakes',
    price: 30,
    id: '🥞',
  }
];

// Array vacío para almacenar productos seleccionados
const myProducts = [];

// Mostrar los arrays iniciales
console.log("product", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Encontrar el índice del producto con el identificador '🍔'
const productIndex = products.findIndex(item => item.id === '🍔');

// Verificar si se encontró el producto
if (productIndex !== -1) {
  // Agregar el producto a 'myProducts'
  myProducts.push(products[productIndex]);
  // Eliminar el producto de 'products' usando splice
  products.splice(productIndex, 1);
}

// Mostrar los arrays después de la manipulación
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
// Mostrar el índice del producto encontrado ('🍔')
console.log("productIndex", productIndex);

//Se define un array llamado products que contiene objetos representando productos, cada uno con un 
//título, precio e identificador único.
//Se crea un array vacío llamado myProducts que se utilizará para almacenar los productos seleccionados.
//Se imprimen en la consola los arrays products y myProducts iniciales.
//Se utiliza el método findIndex para buscar el índice del producto con el identificador '🍔' en el 
//array products. Si se encuentra, el índice se almacena en la variable productIndex. Si no se encuentra, 
//productIndex será -1.
//Se verifica si se encontró el producto. Si productIndex no es -1, significa que el producto fue 
//encontrado, y se realiza lo siguiente:
//Se agrega el producto encontrado a myProducts utilizando push.
//Se elimina el producto de products usando el método splice.
//Se imprimen en la consola los arrays products y myProducts después de la manipulación.
//Se imprime en la consola el valor de productIndex, que representa el índice del producto encontrado 
//en el array products.
//En resumen, este código realiza la transferencia de un producto específico de products a myProducts 
//basándose en el identificador del producto ('🍔').


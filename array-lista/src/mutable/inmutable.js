//Si deseas eliminar elementos de un array sin modificar el original, puedes utilizar métodos 
//inmutables como filter o slice. Aquí hay un ejemplo utilizando filter:

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

const myProducts = [];
console.log("product", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Filtrar los elementos diferentes al identificador '🍔'
const filteredProducts = products.filter(item => item.id !== '🍔');
// Si hay algún elemento filtrado, añadirlo a myProducts
if (filteredProducts.length < products.length) {
  const removedProduct=products.find(item => item.id === '🍔');
  myProducts.push(removedProduct);
}
console.log("test1", filteredProducts);
console.log("test2", myProducts);

//En este ejemplo, filter se utiliza para crear un nuevo array (filteredProducts) que contiene todos 
//los elementos diferentes al identificador '🍔'. Si hay algún elemento filtrado (lo cual significa que 
//el identificador '🍔' estaba presente en el array original), se añade ese elemento a myProducts. De 
//esta manera, products se mantiene sin cambios.
//Nota: Ten en cuenta que filter crea un nuevo array y no modifica el array original. También, find se 
//utiliza para encontrar el elemento eliminado y agregarlo a myProducts.


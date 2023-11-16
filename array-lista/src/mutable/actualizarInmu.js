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
// Definir el nuevo precio y descripción
const newPrice = 5;
const newDescription = 'Delicious food!';

// Actualizar cada objeto en el array products utilizando map
const updatedProducts = products.map(product => ({
  ...product,
  newPrice,
  description: newDescription
}));

console.log('test1',updatedProducts); //actualizar sin mutar el array original 
//En el código que has proporcionado, estás utilizando el método map para crear un, nuevo array llamado 
//updatedProducts que contiene objetos actualizados sin modificar el array original products. Este 
//enfoque es inmutable, ya que no altera directamente el array original. El operador de propagación 
//(...) se utiliza para crear una copia superficial de cada objeto existente en el array products, y 
//luego se agregan o sobrescriben las propiedades newPrice y description en cada objeto del nuevo array.
//Por lo tanto, el array original products permanece sin cambios, y el resultado de la operación se 
//almacena en un nuevo array updatedProducts. Este es un buen ejemplo de manipulación inmutable de 
//arrays en JavaScript.
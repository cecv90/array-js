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

console.log('test', products);
//Definir el nuevo precio y la descripción.
const update={
  id: '🥞',
  changes :{
    price: 200,
    desciption :'delicios food'
  }
};
// Actualizar cada objeto en el array products
const productsIndex =products.findIndex(item => item.id === update.id);
products[productsIndex] = {
  ... products[productsIndex],
  ...update.changes
};
console.log('test1',products); 

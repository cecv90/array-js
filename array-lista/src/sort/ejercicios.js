Claro, aquí te dejo un ejemplo de un algoritmo más complejo que utiliza los métodos map, filter, sort y reduce. Imaginemos que tenemos una lista de productos y queremos realizar ciertas operaciones estadísticas sobre ellos:

javascript
Copy code
const productos = [
  { nombre: 'Laptop', precio: 1200, stock: 10 },
  { nombre: 'Teléfono', precio: 800, stock: 20 },
  { nombre: 'Tablet', precio: 300, stock: 15 },
  { nombre: 'Cámara', precio: 500, stock: 8 },
];

// 1. Filtrar productos con un precio mayor a 500
const productosCaros = productos.filter(producto => producto.precio > 500);

// 2. Aumentar el precio de los productos caros en un 10%
const productosCarosAumentados = productosCaros.map(producto => ({
  ...producto,
  precio: producto.precio * 1.1,
}));

// 3. Ordenar los productos caros por precio de forma descendente
const productosCarosOrdenados = productosCarosAumentados.sort((a, b) => b.precio - a.precio);

// 4. Calcular el precio total de los productos caros ordenados
const precioTotalCaros = productosCarosOrdenados.reduce((total, producto) => total + producto.precio, 0);

console.log('Productos caros:', productosCaros);
console.log('Productos caros aumentados:', productosCarosAumentados);
console.log('Productos caros ordenados:', productosCarosOrdenados);
console.log('Precio total de productos caros:', precioTotalCaros);
En este ejemplo:

Utilizamos filter para seleccionar los productos con un precio mayor a 500.
Usamos map para aumentar el precio de los productos seleccionados en un 10%.
Aplicamos sort para ordenar los productos caros de forma descendente según el precio.
Con reduce, calculamos el precio total de los productos caros ordenados.
Este es solo un ejemplo y puedes adaptar y combinar estos métodos según las necesidades específicas de tu aplicación. Estos métodos son poderosos cuando se utilizan en conjunto para manipular y transformar datos de manera declarativa y funcional.
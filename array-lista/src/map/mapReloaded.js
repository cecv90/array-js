//Map Reloaded, tecnica en ciencia de datos escojer los elementos apropiados para poder trabajar, seleccionar y limpiar datos.

//Crear una matris y un objetos.
const ordes=[
  {
    id:'001',
    customerName:'Nicola',
    total:'60',
    delivered:'false',
  },
  {
    id:'002',
    customerName:'FIVE',
    total:'550',
    delivered:'true',
  },
  {
    id:'003',
    customerName:'SIX',
    total:'160',
    delivered:'true',
  },
];

//Ejecutando const ordens.
console.log('original', ordes);

//Método map.
//const mapear =ordes.map(item => item.total);
//console.log('Método map', mapear);

//Agregamos un map para crear un bueno objeto con la propiedad tax
const mapearReloaded =ordes.map((item) => {
  return{
    ...item,
    tax: .19
  };
});
console.log('MapearReloaded', mapearReloaded);

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

//Método filter para delivery mayor a 100.
const delivered = ordes.filter(item => item.delivered && item.total >= 100);
console.log("Método filter", delivered);
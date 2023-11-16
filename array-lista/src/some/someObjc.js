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

//Asignar una contaste para ver si la ordenes fueron entregada
const answer=ordes.some(item => item.delivered);
console.log('answer',answer);
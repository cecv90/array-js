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

//Filter para la busquedad.
const search =(query) => {
  return ordes.filter (item => {
    return item.customerName.includes(query);
  })
};
console.log(search('a'));
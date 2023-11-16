//Crear un objecto con los datos.
const data=[
  {
    name:'Nicole',
    level:'low',
  },
  {
    name:'Carlos',
    level:'Medium',
  },
  {
    name:'Yodi',
    level:'legend',
  },
  {
    name:'Nic',
    level:'low',
  },
  {
    name:'Car',
    level:'Medium',
  },
  {
    name:'Alexandra',
    level:'legend',
  }
];

//Asignar una constante.
const answer= data
//Llamar al método map para transformar el array.
.map(item => item.level)
//Utilizar el método reduce a un solo elemento.
.reduce((obj,item)=>{
  if(!obj[item]){
    obj[item] = 1;
  } else{
    obj[item] = obj[item] + 1;
  }
  return obj;
},{});
console.log(answer);

//El método include determina si un array o string incluye un determinado elemento, devuelve true o 
//false, si existe o no respectivamente.

const pets=['cat','dog','bat'];
let includeArray=false;
for(let index=0;index < pets.length; index){
  const item=pets[index];
  if(item === 'cat'){
    includeArray = true;
    break;
  }
}
console.log('bucle ',includeArray);

const metodoInclude=pets.includes('bat');
console.log('Método include', metodoInclude);


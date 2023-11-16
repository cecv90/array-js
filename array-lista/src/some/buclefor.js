// asignar una variable con array de números.
const number=[1,2,3,4,5,6];
// utilizar un bucle for para encontrar números pares.
let answer= false;
for(let index= 0 ; index < number.length; index++){
  const element =number[index];
  if(element % 2 === 0){
    answer=true;
    break
  }
}
console.log('answer', answer);
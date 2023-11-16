//Array de número.
const element=[1,2,3,4,5,6,3,8,4];
//método reduce para encotrar elementos repetidos.
const answer =element.reduce((obj, element) => {
  if(!obj[element]){
    obj[element] = 1;
  } else {
    obj[element]=obj[element] + 1;
  }
  return obj;
},{});
console.log(answer);


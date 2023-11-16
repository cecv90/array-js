//Agrupar elementos por rango usando reduce.
const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const conteoPorRango=array.reduce((acumulador,elementoActual)=>{
  if(elementoActual >= 1 && elementoActual <= 5){
    acumulador ["1-5"] = (acumulador["1-5"] || 0) + 1;
  } else if (elementoActual >= 6 && elementoActual <= 10){
    acumulador["6-10"] = (acumulador["6-10"] || 0) + 1; 
  } else if (elementoActual >= 11 && elementoActual <= 20){
    acumulador["11-20"] = (acumulador["11-20"] || 0) + 1;
  }
  return acumulador; 
},{});
console.log("reduce", conteoPorRango);

//En este ejemplo, se recorre el array y se usa la función de reducción para 
//contar la cantidad de valores que caen en cada rango. El objeto conteoPorRango 
//contendrá el recuento para cada rango del 1 al 5, del 6 al 10 y del 11 al 15.

//Si tu array contiene otros valores, asegúrate de ajustar las condiciones en las 
//sentencias if dentro de la función de reducción para capturar esos rangos según 
//sea necesario.

//Agrupemos por rango utilizando el método reduce, cuanto valores hay de 1 al 5 del
//6 al 10 y del 11 al 15, Para agrupar los valores por rango utilizando el método 
//reduce(), puedes contar cuántos valores se encuentran en cada uno de los rangos 
//dados. Aquí hay un ejemplo de cómo podrías hacerlo:


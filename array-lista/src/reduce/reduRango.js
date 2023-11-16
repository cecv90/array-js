//Claro, una forma más concisa y escalable de agrupar y contar valores por rango 
//es usando un enfoque dinámico. Esto implica definir los rangos de interés y luego
//contar cuántos elementos caen en cada rango.

//Aquí hay un ejemplo que utiliza un enfoque más dinámico y escalable:

//asignar una variable con un una lista de elementos.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
//agregar un objetos con los rangos.
const rangos={
  '1-5':[1,2,3,4,5],
  '6-10':[6,7,8,9,10],
  '11-20':[11,12,13,14,15,16,17,18,19,20]
};
//Crear una función utilizando el método reduce.
const contarPorRango=array.reduce((acumulador,elementoActual)=>{
  for(let rango in rangos){
    if(rangos[rango].includes(elementoActual)){
      acumulador[rango] = (acumulador[rango] || 0) + 1;
      break; 
    }
  }
  return acumulador;
},{});
console.log(contarPorRango);

//En este ejemplo, los rangos de interés se definen en el objeto rangos. Luego, 
//se utiliza array.reduce() para iterar sobre el array y contar cuántos elementos 
//caen en cada rango. El código es más escalable y fácil de mantener, ya que 
//simplemente puedes modificar los valores en el objeto rangos para cambiar o 
//agregar nuevos rangos según sea necesario.
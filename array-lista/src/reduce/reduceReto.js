//Agrupemos por rango utilizando el método reduce, cuanto valores hay de 1 al 5 del 6 al 10 y del 
//11 al 15
//Para agrupar los valores por rango utilizando el método reduce(), puedes contar cuántos valores se 
//encuentran en cada uno de los rangos dados. Aquí hay un ejemplo de cómo podrías hacerlo:


/*const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const conteoPorRango = array.reduce((acumulador, elementoActual) => {
  if (elementoActual >= 1 && elementoActual <= 5) {
    acumulador["1-5"] = (acumulador["1-5"] || 0) + 1;
  } else if (elementoActual >= 6 && elementoActual <= 10) {
    acumulador["6-10"] = (acumulador["6-10"] || 0) + 1;
  } else if (elementoActual >= 11 && elementoActual <= 15) {
    acumulador["11-15"] = (acumulador["11-15"] || 0) + 1;
  }
  return acumulador;
}, {});

console.log(conteoPorRango);*/


//En este ejemplo, se recorre el array y se usa la función de reducción para contar la cantidad de valores que caen en cada rango. El objeto conteoPorRango contendrá el recuento para cada rango del 1 al 5, del 6 al 10 y del 11 al 15.

//Si tu array contiene otros valores, asegúrate de ajustar las condiciones en las 
//sentencias if dentro de la función de reducción para capturar esos rangos según 
//sea necesario.




//Claro, una forma más concisa y escalable de agrupar y contar valores por rango 
//es usando un enfoque dinámico. Esto implica definir los rangos de interés y luego
//contar cuántos elementos caen en cada rango.

//Aquí hay un ejemplo que utiliza un enfoque más dinámico y escalable:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const rangos = {
  "1-5": [1, 2, 3, 4, 5],
  "6-10": [6, 7, 8, 9, 10],
  "11-15": [11, 12, 13, 14, 15]
};

const conteoPorRango = array.reduce(function(acumulador, elementoActual) {
  for (let rango in rangos) {
    if (rangos[rango].includes(elementoActual)) {
      acumulador[rango] = (acumulador[rango] || 0) + 1;
      break;
    }
  }
  return acumulador;
}, {});

console.log(conteoPorRango);
//En este ejemplo, los rangos de interés se definen en el objeto rangos. Luego, 
//se utiliza array.reduce() para iterar sobre el array y contar cuántos elementos 
//caen en cada rango. El código es más escalable y fácil de mantener, ya que 
//simplemente puedes modificar los valores en el objeto rangos para cambiar o 
//agregar nuevos rangos según sea necesario.
function aplanarArrayRecursivo(array){
  let newArray=[];
  array.forEach((element) => {
    if(Array.isArray(element)){
      newArray = newArray.concat(aplanarArrayRecursivo(element))
    } else{
      newArray.push(element)
    }
  });
  return newArray;
}
 //Recursividad [1, 2, 3, 4, 5,6, 7, 8, 9]

//forma recursiva, puedes diseñar una función que examine cada elemento del array y, si es un array, 
//llame a la función nuevamente para aplanar ese subarray.
//Aquí tienes un ejemplo de cómo podrías aplanar un array de manera recursiva:
//En este ejemplo, la función aplanarArrayRecursivo() recibe un array y utiliza forEach() para recorrer 
//cada elemento. Si el elemento es un array, la función se llama a sí misma (aplanarArrayRecursivo()) 
//para aplanar ese subarray. Esto se repite hasta que no haya más elementos anidados, devolviendo 
//finalmente un nuevo array aplanado.La recursividad puede ser poderosa, pero es importante tener en 
//cuenta que se debe controlar para evitar posibles desbordamientos de pila (stack overflow) en casos 
//extremos de anidamiento excesivo en la estructura del array.


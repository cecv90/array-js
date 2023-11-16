//El método every() en JavaScript se utiliza para comprobar si todos los elementos 
//de un array satisfacen cierta condición. Devuelve true si todos los elementos 
//cumplen con la condición dada; de lo contrario, devuelve false.
//A diferencia del método some(), que verifica si al menos un elemento cumple con la 
//condición, every() verifica que todos los elementos cumplan con la condición.
//Aquí tienes un ejemplo de cómo se usaría every():
//Supongamos que queremos verificar si todas las citas en el array dates están 
//programadas para después de cierta hora, por ejemplo, las 12 PM. Podríamos usar 
//every() para verificar si todos los eventos comienzan después de las 12 PM.

const dates = [
  {
    startDate: new Date(2023, 1, 1, 14), //Supongamos que este es un evento posterior a las 12 PM
    endDate: new Date(2023, 1, 1, 15),
    title: 'Cita de Trabajo',
  },
  {
    startDate: new Date(2023, 1, 1, 12), //Supongamos que este es un evento antes de las 12 PM
    endDate: new Date(2023, 1, 1, 13),
    title: 'Cita en Odontologo',
  },
];
const isAllAfterNoon = dates.every(date => date.startDate.getHours() >= 12);
console.log('Todos los eventos comienzan después de las 12 PM:', isAllAfterNoon);

//En este caso, every() itera sobre cada cita en el array dates y verifica si la 
//hora (getHours()) de inicio (startDate) es mayor o igual a 12 (es decir, si 
//ocurre después de las 12 PM). Devolverá true si todos los eventos comienzan 
//después de las 12 PM, de lo contrario, devolverá false.
//El resultado se imprimirá en la consola con console.log('Todos los eventos 
//comienzan después de las 12 PM:', isAllAfterNoon);.
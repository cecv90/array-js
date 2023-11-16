//Crear una variable con un array con los datos.
const dates=[
  {
    startDate:new Date(2023,1,1,10),
    endDate:new Date(2023,1,1,11),
    title:'Cita de Trabajo',
  },
  {
    startDate:new Date(2023,1,1,11),
    endDate:new Date(2023,1,1,12),
    title:'Cita en Odontologo',
  },
]; 

newAppointment ={
  startDate:new Date(2023,1,1,20),
  endDate:new Date(2023,1,1,24),
};
//Extraer date-fn.
let areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');


//utilizar el método some.
const isOverlap=(newDate)=>{
  return dates.some(date =>{
    return areIntervalsOverlapping(
      {start:date.startDate, end:date.endDate},
      {start:newDate.startDate, end:newDate.endDate}
    )
  })
};
console.log('isOverlap', isOverlap(newAppointment));
// Utiliza date-fns para importar la función areIntervalsOverlapping, que permite verificar si dos 
//intervalos de tiempo se superponen. Luego, se define una función isOverlap que utiliza some para 
//iterar sobre el array dates y verifica si hay superposición con la nueva cita (newAppointment)
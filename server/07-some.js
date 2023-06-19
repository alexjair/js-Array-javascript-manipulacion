// almenos 1 cumple la condicion retorna true

const numbers = [1, 2, 3, 5]

//old
let respuesta = false
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break
    }
}

//some
const respuesta2 = numbers.some(item => item % 2 === 0)
console.log(respuesta2) // true

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

//install libreria 
//CLI: npm install date-fns
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const funIsOverlap = (newDate) =>{
    return dates.some(date => {
        //retorna true o false si sobrepone a cita  
        return areIntervalsOverlapping(
            {start:date.startDate, end:date.endDate},
            {start:newDate.startDate,end:newDate.endDate}
        )
    })
}
console.log(isOverlap(newAppointment));
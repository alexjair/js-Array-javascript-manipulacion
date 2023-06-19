//todos los elemntos deben de cumplir con la condicion

const numbers = [1, 30, 39, 29, 10, 13]

//old
let respuesta = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}
console.log('for',respuesta) // false


const respuesta2 = numbers.every(item => item < 40)
console.log("every 1",respuesta2) // true

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];
  const respuesta3 = team.every(item => item.age < 15)
  console.log("respuesta3",respuesta3) 
//solo devuelve un elemento;
//obj, sino encuentra ninguno devuelve undefined

const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) 

//devuelve el obj
const respuesta2 = numbers.find(item => item >= 40)
//devuelve el index!!
const respuesta3 = numbers.findIndex(item => item >= 40)

console.log('respuesta2',respuesta2) 
console.log('respuesta3',respuesta3) 

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const resp4 = products.find(item => item.id === '🍕');
  console.log(resp4);
//{ name: 'Pizza', price: 12, id: '🍕' }
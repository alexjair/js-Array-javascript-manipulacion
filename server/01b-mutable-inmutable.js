//MUTABLE
const original = [1,2,3]
const copia = original
//INMUTABLE
let arrayoSeguro = {...original}

copia[0] = "Hola"
original[2] = "Saludos"

console.log("(MUTABLE) original",original) // [ 'Hola', 2, 3 ]
console.log('(MUTABLE) copia',copia) // [ 'Hola', 2, 3 ]
console.log('(INMUTABLE) arrayoSeguro',arrayoSeguro) // [ 'Hola', 2, 3 ]



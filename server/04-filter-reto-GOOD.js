const orders = [
    {
      name: "Nicolas rojas",
      total: 60,
      deli: true,
    },
    {
      name: "Zulema paria",
      total: 120,
      deli: false,
    },
    {
      name: "Santiago rejas",
      total: 180,
      deli: true,
    },
    {
      name: "Valentina paria",
      total: 240,
      deli: true,
    },
  ]
const array = ['carro','sapito','gato','pollo'];

//OLD 
const arrayA = []; 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.length >=6){
        arrayA.push(element);
    }
}
console.log('original',array);
console.log('for',arrayA);

//NEW filter!!
const arrayB = array.filter(item => item.length >= 6) ;
console.log('filter arrayB',arrayB);
const arrayC = orders.filter(item => item.deli == true) ;
console.log('filter arrayC',arrayC);

//aplication search
const funSearch = (vSearch) =>{
    return orders.filter(row => {
        return row.name.includes(vSearch);
    });
};
console.log('funSearch',funSearch('x'));

//Reto

/*
Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ]
*/

function filterByLength(array) {
    return array.filter(item => item.length >= 4 );
}
  
const arrayD =  ['amor', 'sol', 'piedra', 'día'];
const arrayE =  ['rosa', 'gol', 'pez', 'día', 'gafas'];
console.log('reto arrayD',filterByLength(arrayD));
console.log('reto arrayE',filterByLength(arrayE));

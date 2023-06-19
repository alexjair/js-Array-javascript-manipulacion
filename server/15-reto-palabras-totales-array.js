/*
En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

Para solucionarlo vas a encontrar una función llamada countWords que tiene un parámetro de entrada:

array: Un array de frases
Dentro del cuerpo de la función countWords debes escribir tu solución.

Ejemplo:

Input: [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

Output: 20
*/

const array = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

function countWords(array) {
    
    return array.map(item => {
        return (item.split(" ")).length;
    }).reduce((sum, x) => sum + x, 0);
}

function solution(lines) {
   //une todos los elementos con un espacio
   return lines.join(" ").split(" ").length
}; 

console.log(countWords(array));
console.log(solution(array));

  



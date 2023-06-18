/*
Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3]
Output: [1, 1, -4, -6]
*/

function multiplyElements(array) {
    // Tu código aquí 👈
    //console.log('array',array);
    const arrauNew = array.map(item => {
        if(item === 1){
            return 1
        }else{
            return item*2
        }
    });
    return arrauNew;
}

arrayInput = [2, 4, 5, 6, 8];
arrayInput1 = [1, 1, -2, -3];
console.log(multiplyElements(arrayInput));
console.log(multiplyElements(arrayInput1));


 
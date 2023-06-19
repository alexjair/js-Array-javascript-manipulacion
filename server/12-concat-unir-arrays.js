const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

//union con el concat
const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//union con el split operation
const result5 = [...numbers2,...numbers3];
console.log('result5',result5);

const result6 = [numbers2,numbers3];
console.log('result6',result6);

const result7 = [numbers2,...numbers3];
console.log('result7',result7);

//modificar el array original y agrgar los elemtos de otro array
console.log('numbers1',numbers1);
numbers1.push(...numbers2);
console.log('numbers1',numbers1);
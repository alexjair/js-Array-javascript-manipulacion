const array = [1, 2, 3, 4, 5];

//old
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;
}
console.log('sum',sum);

//reduce
//todo se reduce a una suma total de las ventas
const resp = array.reduce((sum, item) => sum + item, 0);
console.log('resp',resp);
//MUTABLE
const arrayNumber = [1,2,3,4,5];

const arrayNew = [];
arrayNumber.forEach( item =>{
    arrayNew.push(item+1000);
});
console.log('arrayNew',arrayNew);

//MAP
const arrayNew2 = arrayNumber.map( item => item + 1000 );
console.log('arrayNumber',arrayNumber);
console.log('arrayNew',arrayNew2);





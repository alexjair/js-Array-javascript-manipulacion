arrayA = [1,2,3,4,5,6];
arrayB = ['a','b','c','d'];
console.log(arrayA);
console.log(arrayB);

//Use "For"
let elemect = '';
for (let i = 0 ; i < arrayB.length ; i++){
    elemect = arrayB[i];
    console.log('for: ',elemect);
}

//Use "foreach"
arrayB.forEach(item => {
    console.log('foreach:',item);
});





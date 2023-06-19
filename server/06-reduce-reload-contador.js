//ejemplo 01
const array = [1, 2, 23 , 3, 3, 4, 14, 4];
console.log('array',array);

const arrayNew = array.reduce((obj, item) =>{
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {} ); //'{}' es el estado inicial para obj
console.log('arrayNew',arrayNew);

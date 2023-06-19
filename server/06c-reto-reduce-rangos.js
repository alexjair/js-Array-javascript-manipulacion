const arrayEnteros = () => { 
  let array = [];
  for (let index = 0; index < 10; index++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
  }
  return array;
}

const arrayA = arrayEnteros();
console.log(arrayA);

const arrayReduce = arrayA.reduce((obj, item) => {
  /*
    if(!obj['0-5']) obj['0-5'] = 0;
    if(!obj['6-8']) obj['6-8'] = 0;
    if(!obj['9-10']) obj['9-10'] = 0;
  */
    if(item >= 0 && item <= 5){
       obj['0-5'] += 1;
    }
    if( item >= 6 && item <= 8) {
      obj['6-8'] += 1;
    }
    if( item >= 9 && item <= 10) {
      obj['9-10'] += 1;
    }
    return obj;
  },{
    '0-5':0,
    '6-8':0,
    '9-10':0
  }
);
console.log(arrayReduce);


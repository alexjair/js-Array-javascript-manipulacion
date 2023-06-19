// aplanar arrays 
// metodo aplanar!!1
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  
  const flatArray = []
  
  for(let i=0; i<matrix.length; i++){
    const array = matrix[i]
    for(let j=0; j<array.length; j++){
      flatArray.push(matrix[i][j])
    }
  }
  
  console.log(flatArray)
  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

  //flat!!!
  const matrix2 = [
    [1,2,3],
    [4,5,[11,['b','a']]],
    [7,8,[667,990]],
  ]
  console.log(matrix2)
  //flat 0 nivel
  const flat = matrix2.flat();
  console.log('flat',flat);
  //flat 3 nivel
  const flat3 = matrix2.flat(3);
  console.log('flat',flat3);
  
  //reto
  //https://platzi.com/comentario/2895103/
  const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matriz);

console.log('profundidad',newArray);
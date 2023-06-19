const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//filtro
const index = products.findIndex(item => item.id === '🍔');
if(index !== -1){
    //push metodo mutable
    myProducts.push(products[index]);
    products.splice(index,1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicius'
    }
}
const updateIndex = productsV2.findIndex(item => item.id === update.id);
if(updateIndex !== -1){
    //push metodo mutable
    //extraña forma de programar
    productsV2[updateIndex] = { ...update.changes, ...productsV2[updateIndex] };
}
console.log('productsV2',productsV2);

//RETO No1
//FILTRO

//RETO No2
//Como realiar el update sin mutar elementos (INMUTABLE))

const productsV3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const respreto =  productsV3.map(item => {
    if (item.id === update.id) {
      return {
        ...item,
        ...update.changes,
      }
    }
    return {...item};
});

console.log('RETO No2',respreto);
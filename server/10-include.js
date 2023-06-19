// nos dice si un elemnto esta dentro del arrays
// tambien sirve para string
const pets = [ "cat", "dog", "bat" ]

let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

console.log('for',includeInArray) 

const resp = pets.includes('bat');
console.log('resp',resp);


const elements = ["hola", null, "como", "estas"]
const resultado = elements.join("-")

console.log(resultado) // 'hola//como/estas'

const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

cadena.split(" ") 
/* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
*/
cadena.split(", ") 
/* [ 
    'JavaScript es maravilloso', 
    'con JavaScript puedo crear el futuro de la web.' 
]*/
cadena.split("JavaScript")
/* [
    '', 
    ' es maravilloso, con ', 
    ' puedo crear el futuro de la web.' 
]*/
cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]

//url final
//title.replace(/ /g, '-')
const resp = cadena.split(' ').join('-').toLowerCase().replace(/[.,]/g,'');
console.log('URL',resp);
// -------------------------------------------------------------------
// Aula Funções: Argumentos e parâmetros
// // function expression
// //funcion anonymous


// //parâmetros(parameters)
// const sum = function(number1, number2) {
//     console.log(number1 + number2)
// }

// sum(2,3)   // arguments - argumentos

// -----------------------------------------------------------------

//aula retornando valores dentro da função
// const sum = function(number1, number2) {
//         let total = number1 + number2
//         return total
// }

// let number1 = 34
// let number2 = 25

// console.log(`O número 1 é ${number1}`)
// console.log(`O número 2 é ${number2}`)
// console.log(`a coma é ${sum(number1, number2)}`)

// -----------------------------------------------------------------


// aula outra maneira de entender funções
// Função é um liquidificador

// function fazerSuco(fruta1, fruta2) {
//     return 'suco de: ' + fruta1 + fruta2
// }

// const copo = fazerSuco('banana', 'maça')

// console.log(copo)

//------------------------------------------------------------------

//aula Function scope

// let subject = 'creat video'

// function createThink(subject) {
//     subject = 'study'
//     return subject
// }

// console.log(createThink(subject))
// console.log(subject)


// ---------------------------------------------------------------

// //Aula Function Hoisting

// sayMyName()


// function sayMyName() {
//     console.log('Patrícia')
// }


//----------------------------------------------------------------

// //aula Arrow function

// const sayMyName = (name) => {
//     console.log(name)
// }

// sayMyName('Patrícia')

// -------------------------------------------------------------

// Aula Callback function

// function sayMyName(name) {
//     console.log('antes de executar a função callback')

//     name()

//     console.log('depois de executar a callback')
// }

// sayMyName(
//     () => {
//         console.log('estou em uma callback')
//     }
// )

// ------------------------------------------------------------

//aula de Funções construtoras

/* Function() constructor

*expressão new
*criar um novo objeto
*this keyword

*/

function Person(name) {
    this.name =  name
    this.walk = function() {
        return this.name + 'está andando'
    }
}

const roberto = new Person('Roberto')
const patricia = new Person('Patrícia')
console.log(roberto.walk())
console.log(patricia.walk())

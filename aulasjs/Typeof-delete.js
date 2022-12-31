/* 
Operadores unários
typeof
delete
*/

const person = {
    name: 'Mayk',
    age: 25,
}

delete person.age
console.log(person)    // retorna: {name: Mayk}
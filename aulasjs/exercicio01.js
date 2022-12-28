// 1. Declare uma variável de nome weight

let weight 

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 3. Declare uma variáel e atribua valores para cada um dos dados:
        *name: string
        *age: Number (integer)
        *stars: Numver (float)
        isSubscribed: boolean
*/

let name = "Patrícia"
let age = 26
let stars = 5.1
let isSubscribed = true

/* 4. A variável student abaixo é de que tipo de dado?

4.1 Atribua a ea as mesmas propriedades e valores do exercício 3

4.2 Mostre no console a seguinte mensagem:
    <name> de udade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {}
console.log(typeof student)

let student = {
    name: "Patrícia",
    age: 26,
    weight: 93.1,
    isSubscribed: true
}

console.log(`${student.name} tem ${student.age} de idade e pesa ${student.weight} kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

//6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

let students = [
    student
]

console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const john = {
    name: "John",
    age: 27,
    weight: 78.7,
    isSubscribed: false
}

students[1] = john
console.log(students)

/* 9. Sem rodas o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou

console.log(a)
var a = 1

*/

// undefined, pq a variavel var vai sofrer alteração, vai subir, porém vai esatr como indefinida. 

console.log(a)
var a = 1


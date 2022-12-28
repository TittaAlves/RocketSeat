/*
Scope

- Scope determina a visibilidade de alguma variável no JS.

#Block Statement

*/

// vamos iniciar um bloco

{
    //qui dentro é um bloco e posso colocar qualquer código

 } //aqui fecha o bloco

 //O bloco, também criará um novo escopo. Chamamos de ‘Block-scoped’

{
    let x = 0
    console.log(x)
}

/* 

Var

Var é global e poderá funcionar de um escopo de bloco.

*/

console.log('>existe x antes do bloco?', x)

{
	var x = 0
}

console.log('>existe x depois do bloco?', x)


/*

Let e const

const e let são locais e só funcionam no escopo onde foi criada

*/

console.log('>existe y antes do bloco?', y) // aqui não funciona

{
	let y = 0          // funcionaria se eu colocasse aqui dentro, pq ele só funciona no escopo de onde foi criado. 
}

console.log('>existe y depois do bloco?', y)  // aqui não funciona


//--------------------------------//

// Variáveis e tipos de dados


//Declaração or declaration
var name

//assigmente or atribuição de valores
name = "Patrícia"

//Que tipo de dado foi colocado na variável
console.log(typeof name)

//agrupamento de declarações
let age, isHuman

age = 18
isHuman = true

console.log(name, age, isHuman)

//concatenando os valores
console.log(' o ' + name + ' tem ' + age + ' anos ' )

//interpolando os valores literals or template strings
console.log(`o ${name} tem ${age} anos.`)
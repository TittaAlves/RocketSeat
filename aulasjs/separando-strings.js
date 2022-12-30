//Manipulando Strings e Números

// separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

// const texto = 'Este é um texto de exemplo';
// const array = texto.split(' ');
// console.log(array); // ['Este', 'é', 'um', 'texto', 'de', 'exemplo']

// // Em seguida, você pode usar o método "join()" para transformar o array em uma string, substituindo os espaços por underscores:

// const novoTexto = array.join('_');
// console.log(novoTexto); // 'Este_é_um_texto_de_exemplo'

// //Assim, o código completo ficaria assim:

const texto = 'Este é um texto de exemplo';
const array = texto.split(' ');
const novoTexto = array.join('_');
console.log(novoTexto); // 'Este_é_um_texto_de_exemplo'
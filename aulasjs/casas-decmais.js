
// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula. 
let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))


/*

O código começa declarando uma variável "number" e atribuindo a ela um valor numérico. Em seguida, o método "console.log()" é usado para exibir o resultado de uma operação envolvendo essa variável.

A primeira operação que é realizada é o método "toFixed(2)". Esse método é usado para arredondar um número para um determinado número de casas decimais. No caso, o método está sendo usado para arredondar "number" para duas casas decimais.

Em seguida, o método "replace()" é usado para substituir o ponto decimal na string resultante pelo símbolo de vírgula. Isso faz com que o número seja exibido com vírgulas ao invés de pontos decimais.

Por exemplo, se o valor de "number" for 345.33452345, o resultado da primeira operação (toFixed(2)) será "345.33" e o resultado final da segunda operação (replace()) será "345,33". Esse é o valor que será exibido na tela pelo "console.log()".

Em resumo, esse código arredonda o número para duas casas decimais e substitui o ponto decimal por uma vírgula antes de exibi-lo na tela. 
*/
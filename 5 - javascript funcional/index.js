function soma(a, b) {
    return a + b;
}
console.log(soma(2, 2));

// função anônima
(function (x, y) {
    console.log(x + y);
})(5, 5); // padrão IIFE

// function expression - aplica uma função anônima diretamente a uma variável
const soma2 = function(x, y) {
    return x + y;
}

let resultado = soma2(2, 5);
console.log("function expression simples: " + resultado);

// arrow function - não precisa declarar a palavra function
const soma3 = (x, y) => {
    return x+y;
}
console.log("arrow function: " + soma3(2, 5));

const soma4 = (x, y) => x + y // quando só tem uma linha, pode retirar o return e as chaves
console.log("arrow function uma linha: " + soma4(2, 5));

// função invocada

(() => { console.log("olá mundo") })();

/* estrutura do código acima
(  -> escopo geral
    () => { -> função anônima sem parâmetro 
        console.log("olá mundo") ->código do que deve ser feito na função
    }
)
();
*/

// spread - sintaxe do espalhamento
const soma5 = (x, y, z=0) => x + y + z;
console.log(soma5(2, 2));
console.log(soma5(2, 2, 3));

const soma6 = (...numeros) => {
    let total = 0;
    for(i of numeros) {
        total += i;
    }

    return total;
}
console.log("Spread: ", soma6(5,5,5,5));

// Construa funções para somar, subtrair, dividir e multiplicar onde cada uma só pode ocupar uma linha.
const add = (a, b) => a+b;
const subt = (a, b) => a-b;
const mult = (a, b) => a*b;
const divi = (a, b) => a/b;

console.log("Soma: " + add(2, 2));
console.log("Subtração: " + subt(10, 7));
console.log("Multiplicação: " + mult(5, 4));
console.log("Divisão: " + divi(10, 2));
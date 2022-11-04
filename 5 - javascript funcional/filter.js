// filter

const meu_array = [1 ,2, 3, 4, 5, 6, 7, 8, 9];

const par = i => i % 2 == 0;
const impar = i => i % 2 == 1;

console.log('pares: ', meu_array.filter(par));
console.log('ímpares: ', meu_array.filter(impar));
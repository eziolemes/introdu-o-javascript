// reduce

numeros = [1, 2, 3, 4, 5];
/*function somanum(total, i) {
    return  total + i;
}*/
const somanum = (total, i) => total + i;
var somatorio = numeros.reduce(somanum);
console.log(somatorio);

notas = [5.7, 6.4, 7.5, 5.9, 5.75]
const somatoria = (total, i) => total + i;
var n = notas.length;
var media = notas.reduce(somatoria)/n;

console.log(`A média de notas é ${media}`);
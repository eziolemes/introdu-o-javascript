// Operações matemáticas
var a = 2;
var b = 3;
var c = "Olá mundo"

var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);

// Estruturas condicionais
if (b%2 == 1) {
    console.log("Número ímpar")
} else {
    console.log("Número par")
}

// Estruturas de repetição
var i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

for(var j=0; j<3; j++) {
    console.log(j);
}

// Tipos de dados
var numero = 6;
var decimal = 4.5;
var texto = "Olá mundo";
var lista = ["laranja", "maçã", "banana"];

console.log(numero);
console.log(decimal);
console.log(texto);
console.log(lista);

console.log(lista[2]);

for (i in lista) {
    console.log(lista[i]);
}

// funções
function func_soma(a, b) {
    return(a + b);
}

var s = func_soma(2, 2);
console.log(s);

function mensagem(acao) {
    alert('ação: ' + acao);
}

function mudaCor(cor) {
    var elemento = document.getElementById('mensagem');
    elemento.style.color = cor;
}

function valida() {
    var nome = document.getElementById('nome');
    if (nome.value =="" ) {
        alert('Campo nome não pode estar em branco');
    } else {
        alert('Nome: ' + nome.value);
    }
    
}
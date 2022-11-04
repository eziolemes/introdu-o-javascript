// map

var estudantes = [
    { nome: "José", nota: 5.7},
    { nome: "Diego", nota: 4.8},
    { nome: "Maria", nota: 7.5},
    { nome: "Paula", nota: 6.7},
]

// normalizar: mario nota passa a ser 10
let notas = []
for(i of estudantes) {
    notas.push(i.nota)
}

var maior_nota = Math.max(...notas);

let notas_normalizadas = estudantes.map(estudantes => (estudantes.nota*10/maior_nota).toFixed(2))

console.log(`Notas antigas eram: ${notas}`);
console.log(`Novas notas: ${notas_normalizadas}`);

function normaliza(x){
    return (x*10/maior_nota).toFixed(2);
}

console.log(
    "Novas notas: " + 
    estudantes
        .map(i => i.nota)
        .map(normaliza)
);

(() => console.log('a'+'aa'))();
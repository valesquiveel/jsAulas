// ARRAY
var estoqueProdutos = ["Tenis", "Bola", "Videogame"];
console.log(estoqueProdutos)

// indice
console.log(estoqueProdutos[1])

// metodo alternativo
// var frutas = Array();
// frutas[0] = "Banana";
// frutas[1] = "Abacaxi";
// frutas[2] = "Laranja";
// console.log(frutas);

// COMANDOS ARRAY
// push - adiciona um elemento na ultima posição
// unshift - adiciona um elemento na primeira posição
estoqueProdutos.push("Chocolate");
console.log(estoqueProdutos);

estoqueProdutos.unshift("Refrigerante");
console.log(estoqueProdutos);
// pop - remove um elemento na ultima posição
estoqueProdutos.pop();
console.log(estoqueProdutos);
// shift - remove o primeiro elemento de um array
estoqueProdutos.shift();
console.log(estoqueProdutos);
// splice - (indice, quantos indices, novo elemento)
estoqueProdutos.splice(1, 0, "Chocolate");
console.log(estoqueProdutos);
// includes - busca um item no array
console.log(estoqueProdutos.includes("Chocolate"));
// length - quantidade de elementos
console.log (`Existem ${estoqueProdutos.length} produtos no nosso estoque`);
// Caixas de texto
// alert("Hello World!");
// confirm("Bom dia, o dia está bom?");
// prompt("Qual é a sua idade?");

console.log("Olha que legal");

// variaveis
// let "temporaria", é sobrescrevivel. Escopo local

function letTeste() {
    let numero = 0;
    numero = 1;
    console.log(numero);
}

// var variavel, recebe valores é sobrescrevivel. Escopo global

var nome = "Valentina"

// const constante recebe valores, não é sobrescrevivel. Escopo global

const pi = 3.14;

const name = prompt("Qual é o seu nome?");
alert("Seja bem vindo(a) " + name);
// comando abaixo utiliza crase
// ${} desconsidera elemento como texto
alert(`${name}, aproveite a estadia!`)

// TIPOS DE VALORES
// STRING
var texto = "Olá mundo"

// NUMBER
var numeroBacana = 10

// BOOLEAN
var ligado = true

// OBJETO
var carro = [ atributo = "algo"];
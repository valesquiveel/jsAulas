// Instalação
// VISITE https://code.jquery.com/jquery-3.7.1.js e salve a página no projeto

// SELETOR JQUERY = $()
var titulo = $("#tituloDaPagina").text("JQUERY AULA");
console.log(titulo);

var paragrafo = $("#textoDaPagina").on("mouseover", function(){
    console.log("Este é o texto do site")
});

// comportamento
// jquery tem capacidade de avaliar valores não definidos e vazios
var usuario = "Val";
var usuarioIndefinido = undefined;

var ususarioResultado = $("#testeintefinido").text(usuario)

//Algoritmo contagem de caracteres

var blocoDeTexto = $("#blocoDeTexto").on("input", function(){
    let blocoDeTextoValue = $("#blocoDeTexto").val()

    let resposta = $("#numCaracteres")
    var contagem = blocoDeTextoValue.length;
    resposta.text(contagem)
})
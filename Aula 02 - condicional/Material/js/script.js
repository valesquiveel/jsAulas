// OPERADORES LOGICOS (COMPARAR)

// > MAIOR QUE 
// < MENOR QUE
// != DIFERENTE DE 
// == IGUAL (= RECEBE, == COMPARA VALOR, === COMPARA VALOR E TIPO)
// >= MAIOR E IGUAL
// <= MENOR OU IGUAL

// OPERADORES ALTENÁRIOS 

// && E (DUAS CONDIÇÕES DEVERÃO SER IGUAIS EM RESULTADO)
// || OU (SE UMA DAS CONDIÇÕES FOR VERDADEIRA SERÁ EXECUTADO)
// ! NÃO (SE NÃO FOR A CONDIÇÃO)

// CONDICIONAIS
// IF (SE SENAO)

if(false){
    console.log("Sou verdadeiro")
}else{
    console.log("Sou falso")
}

// Verifcar idade
var idade = Number(prompt("Qual é a sua idade"));

if(idade >= 18){
    alert("Seja bem vindo!");
}else{
    if (idade == 0){
        alert("Digite uma idade válida")
        location.reload()
    }else{
    alert("Você não tem autorização para acessar esse site!");
    location.href = "https://www.google.com.br/?hl=pt-BR";
    }
}
// if ternario: condição ? bloco1 : bloco2


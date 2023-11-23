var idade = Number(prompt("Qual a sua idade?"));

if (idade >= 1 && idade < 15) {
    alert("Você é: CRIANÇA")
    
}

else if (idade >= 15 && idade < 30) {
    alert("Você é: JOVEM")
}

else if (idade >= 30 && idade < 60) {
    alert("Você é: ADULTO")
}

else if (idade >= 60) {
    alert("Você é: IDOSO")
}

else {
    alert("Digite uma idade válida!")
    location.reload()
}

var novaIdade = confirm("Deseja informar a idade de outra pessoa?")

if (novaIdade == true){
    location.reload();
}
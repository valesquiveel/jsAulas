var idade = Number(prompt("Qual a sua idade?"));

if (idade >= 1 && idade < 15) {
    alert("Você é: CRIANÇA")
    location.reload()
}

else if (idade >= 15 && idade < 30) {
    alert("Você é: JOVEM")
    location.reload()
}

else if (idade >= 30 && idade < 60) {
    alert("Você é: ADULTO")
    location.reload()
}

else if (idade >= 60) {
    alert("Você é: IDOSO")
    location.reload()
}

else {
    alert("Digite uma idade válida!")
    location.reload()
}

var novaIdade = confirm("Deseja informar a idade de outra pessoa?")

if (novaIdade == true){
    location.reload
}
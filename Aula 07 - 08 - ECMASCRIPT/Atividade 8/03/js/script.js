var jogos = ["Call Of Duty", "GTA", "DOOM", "Resident Evil", "Alone in the Dark 98", "God Of War"]

const btnPesquisar = document.querySelector("#btnPesquisar");
btnPesquisar.addEventListener("click", pesquisar)

function pesquisar() {
    let pesquisaInp = document.querySelector("#pesquisa").value
    let resposta = document.querySelector("#resposta")
    var resultado = jogos.includes(pesquisaInp)

    if (resultado == true) {
        resposta.innerHTML = `Jogo encontrado! O jogo pesquisado foi ${pesquisaInp}`
    } else {
        resposta.innerHTML = `Jogo não encontrado! verifique se existe algum erro de digitação`
    }
}




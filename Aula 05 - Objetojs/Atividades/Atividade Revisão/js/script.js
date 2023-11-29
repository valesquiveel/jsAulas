class Filmes {
    nome;
    descricao;
    data;
    diretor;
    categoria;
}

var btnFilmes = document.querySelector("#btnFilmes")
btnFilmes.addEventListener("click", addFilme)

var btnApagar = document.querySelector(".apagar")
btnApagar.addEventListener("click", apagarFilme)


function apagarFilme() {
    var add = document.querySelector(".add");
    add.outerHTML = "";     
}

function addFilme() {
    let nomeInp = document.querySelector("#nome").value
    let descricaoInp = document.querySelector("#descricao").value
    let dataInp = document.querySelector("#data").value
    let diretorInp = document.querySelector("#diretor").value
    let categoriaInp = document.querySelector("#categoria").value
    let resposta = document.querySelector("#resposta")

    var filme = new Filmes();
    filme.nome = nomeInp
    filme.descricao = descricaoInp
    filme.data = dataInp
    filme.diretor = diretorInp
    filme.categoria = categoriaInp

    resposta.innerHTML += `<div class="add"><h3>${filme.nome}</h3>
    <p>Descrição: ${filme.descricao}</p>
    <p>Data: ${filme.data}</p>
    <p>Diretor: ${filme.diretor}</p>
    <p>Categoria: ${filme.categoria}</p>
    <div class="apagar" onclick="apagarFilme()"><button>X</button></div>    
    </div>`
}
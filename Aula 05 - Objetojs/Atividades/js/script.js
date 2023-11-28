class Carro {
    marca;
    modelo;
    ano;
    cor;
    velocidadeMaxima;
    velocidadeAtual;
    acelerar(kh){
        if (kh <= 0) {
            return "Velocidade não permitida! Coloque uma aceleração acima de 0"
        } else {
            if (kh + this.velocidadeAtual > this.velocidadeMaxima) {
                return "O carro atingiu a velocidade máxima! Abaixe a velocidade!"
            }else {
                this.velocidadeAtual = this.velocidadeAtual + kh
                return `Você aumentou ${kh} km/h || Sua velocidade é de ${this.velocidadeAtual} km/h`
            }
        }
                 
    }
    desacelerar(kh){
        if (kh > 0) {
            this.velocidadeAtual = this.velocidadeAtual - kh
            return `Você diminuiu ${kh} km/h da sua velocidade`
        } 
    }

    verVelocidade(){
        return `Sua velocidade atual é de ${this.velocidadeAtual} km/h`
    }
    
}

var btnCarro = document.querySelector("#btnCarro")

btnCarro.addEventListener("click", criarCarro)

function criarCarro (){
    let marcaInp = document.querySelector("#marca").value;
    let modeloInp = document.querySelector("#modelo").value;
    let anoInp = document.querySelector("#ano").value;
    let corInp = document.querySelector("#cor").value;
    let velocidadeMaximaInp = document.querySelector("#velocidadeMaxima").value;
    let resposta = document.querySelector("#resposta")

    var carro = new Carro();
    carro.marca = marcaInp
    carro.modelo = modeloInp
    carro.ano = anoInp
    carro.cor = corInp
    carro.velocidadeMaxima = velocidadeMaximaInp
    carro.velocidadeAtual = 0

    resposta.innerHTML = `<div class="post"><h3>${carro.marca}</h3>
    <p>Modelo: ${carro.modelo}</p>
    <p>Ano: ${carro.ano}</p>
    <p>Cor do carro: <span style="color:${carro.cor};">COR</span></p>
    <p>Velocidade Máxima: ${carro.velocidadeMaxima} km/h</p></div>`
}


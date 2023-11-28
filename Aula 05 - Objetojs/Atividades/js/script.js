class Carro {
    marca;
    modelo;
    ano;
    cor;
    velocidadeMaxima;
    velocidadeAtual;
    acelerar(kh){
        if (kh < this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeAtual + kh
            return `Você aumentou ${kh} km/h da sua velocidade`
        } else {
            this.velocidadeAtual = 213
            return "O carro atingiu a velocidade máxima! Abaixe a velocidade!" 
        }
                 
    }
    desacelerar(kh){
        if (kh > 0) {
            this.velocidadeAtual = this.velocidadeAtual - kh
            return `Você diminuiu ${kh} km/h da sua velocidade`
        } 
    }

    verVelocidade(){
        if (this.velocidadeAtual > 213) {
            this.velocidadeAtual = 213
            return "O carro atingiu a velocidade máxima! Abaixe a velocidade!"
        } else {
            return `Sua velocidade atual é de ${this.velocidadeAtual} km/h`
        }  
    }
}

var carro1 = new Carro();
carro1.marca = "BMW"
carro1.modelo = "218i"
carro1.ano = 2023
carro1.cor = "Cinza"
carro1.velocidadeMaxima = 213
carro1.velocidadeAtual = 0
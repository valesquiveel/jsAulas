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

var carro1 = new Carro();
carro1.marca = "BMW"
carro1.modelo = "218i"
carro1.ano = 2023
carro1.cor = "Cinza"
carro1.velocidadeMaxima = 213
carro1.velocidadeAtual = 0
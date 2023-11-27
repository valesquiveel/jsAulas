class Aluno {
    constructor(valorNome,valorIdade,valorTurma){
        this.nome = valorNome;
        this.idade = valorIdade;
        this.turma = valorTurma;

    }
}

class Curso {
    constructor(valorNome,valorDuracao, valorTipo){
        this.nome = valorNome;
        this.duração = valorDuracao;
        this.tipo = valorTipo;
    }
}

var curso1 = new Curso ("FRONT", 220, "Tecnologia")
var curso2 = new Curso ("JAVA", 400, "Tecnologia")
var curso3 = new Curso ("CULINÁRIA", 100, "Alimentação")

var aluno1 = new Aluno("Leandro", 25, curso1);
var aluno2 = new Aluno("Alice", 20, curso2);
var aluno3 = new Aluno("Victor", 20, curso3);

// atributo privativo, apenas o objeto em si poderá mudar seus valores, não aceitando uma reatribuição fora de seu objetivo.
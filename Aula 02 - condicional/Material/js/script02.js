// CASE

var num1 = Number(prompt("Digite o primeiro número"))
var operador = prompt ("Digite o operador")
var num2 = Number(prompt("Digite o segundo número"))

switch (operador) {
    case "+":
        var resultado = num1 + num2;
        alert(`A soma desses números é: ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo claculo?");

        if(novoCalculo == true) {
            location.reload();
        }   
        break;
    case "-":
        var resultado = num1 - num2;
        alert(`A subtração desses números é: ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo claculo?");

        if(novoCalculo == true) {
            location.reload();
        }  
        break;
    case "*":
        var resultado = num1 * num2;
        alert(`A multiplicação desses números é: ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo claculo?");

        if(novoCalculo == true) {
            location.reload();
        }  
        break;
    case "/":
        var resultado = num1 / num2;
        alert(`A divisão desses números é: ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo claculo?");

        if(novoCalculo == true) {
            location.reload();
        }
        break;
    default:
        alert("Operador inválido! tente novamente")
        location.reload();
        break;
}


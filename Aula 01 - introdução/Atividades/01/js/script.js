alert("Calcule a sua conta:");

var numeroClientes = Number(prompt("Digite o número de pessoas na mesa:"));
var valorTotalConta = Number(prompt("Digite o valor total da conta:"));

var totalCadaCliente = valorTotalConta / numeroClientes;

alert(`o valor da conta para cada pessoa na mesa é de: R$${totalCadaCliente}`);
// let color1 = document.querySelector("#formulario");
// color1.addEventListener("focusin", mudacor1);
// color1.addEventListener("focusout", mudacor2);

// function mudacor1() {
//     document.querySelector("#usuario").style.backgroundColor = "yellow";
// }

// function mudacor2() {
//     document.querySelector("#usuario").style.backgroundColor = "";
// }

var input = document.querySelector("#usuario");
input.addEventListener("focusin", mudaCor);
input.addEventListener("focusout", mudaCorVerifica)

function mudaCor() {
    input.style.backgroundColor = "yellow"
}

function mudaCorVerifica() {
    let inputValor = input.value.length
    let mensagem = document.querySelector("#mensagem")
    if (inputValor < 3) {
        input.style.backgroundColor = "red"
        mensagem.innerHTML = "Digite um nome de usuario com mais de 3 digitos!"
    } else {
        input.style.backgroundColor = "green"
        mensagem.innerHTML = "O nome de usuario atinge os requisitos!"
    }
    
}
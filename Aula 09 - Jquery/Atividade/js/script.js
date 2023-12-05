$("#btnCalcular").on("click", function(){
    let numEscolhido = Number($("#numEscolhido").val());
    for (let i = 1; i <= 10; i++) {
        document.querySelector("#resultadoCalculo").innerHTML += `${numEscolhido} x ${i} = ${numEscolhido * i} <br>`;
    }
})
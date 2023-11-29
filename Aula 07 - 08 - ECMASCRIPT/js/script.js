// REPLACE / REPLACEALL
var frase = "Olá mundo, o mundo é muito legal"
console.log(frase);

console.log(frase.replace("mundo", "bacana"));
console.log(frase.replaceAll("mundo", "bacana"));

// SETATTRIBUTE
document.querySelector("span").setAttribute("style", "color: blue;");

// CLASS LIST
// document.querySelector("#classlist").classList.remove("claro")
// document.querySelector("#classlist").classList.add("claro")
// document.querySelector("#classlist").classList.toggle("escuro")
document.querySelector("#classlist").classList.replace("claro","escuro")

// index of / includes
var frutas = ["Morango", "Banana", "Laranja", "Uva"]
// true e false
console.log(frutas.includes("Abacaxi"))
// o valor indece do array
console.log(frutas.indexOf("LAranja"))

if (frutas.indexOf("Abacaxi" == -1)) {
    console.log('não achei')
}

// SET TIMEOUT
function msg() {
    return new Promise ((teste) => {
        setTimeout(() => {
            console.log("Bom dia")
            teste()
        }, 2000);
    })
    
}

async function carregando() {
    console.log("iniciou")
    await msg();
    console.log("Seja bem vindo");
    
}

carregando()







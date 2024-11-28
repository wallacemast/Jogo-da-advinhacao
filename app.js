let numeroSecreto =  gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerText = texto; 
}

let contador = 1;
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("h2", "");
        contador == 1 ? exibirTextoNaTela("p", "Caraca de Primera!?") : exibirTextoNaTela("p", `Você precisou de ${contador} tentativas!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else 
        if (chute > numeroSecreto){
        exibirTextoNaTela("h1", "ERROU");
        exibirTextoNaTela("h2", "O número é menor");
        exibirTextoNaTela("p", "Escolha outro número entre 1 e 10:");
        } else {
        exibirTextoNaTela("h1", "ERROU");
        exibirTextoNaTela("h2", "O número é maior");
        exibirTextoNaTela("p", "Escolha outro número entre 1 e 10:");
    }
    contador++
    limpaCampo(); 
}

function resetarMensagens() {
    exibirTextoNaTela("h1", "Jogo da Advinhação" );
    exibirTextoNaTela("span", "Feito Por: Wallace Cavalcante" );
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 11)+ 1;
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    contador = 1;
    resetarMensagens();
    document.getElementById('reiniciar').setAttribute("disabled",true);
}

resetarMensagens();
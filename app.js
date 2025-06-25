let listaDeNumerosSorteados = []
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;




function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   
}
function exibirMensagemInicial() {
   exibirTextoNaTela('h1','Number Secret');
   exibirTextoNaTela('p', 'Escolha um numero de 1 e 10');
}

exibirMensagemInicial();
 


function verificarChute() {
   let chute = document.querySelector('input').value;

   if(chute == numeroSecreto){
     exibirTextoNaTela("h1", "Acertou!");
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativas = `Parabens voce acertou o numero com ${tentativas} ${palavraTentativa}`;
     exibirTextoNaTela("p", mensagemTentativas);
     document.getElementById("reiniciar").removeAttribute("disabled");
     
   }else{
      if(chute > numeroSecreto){
         exibirTextoNaTela("p", "numero secreto e menor");
      }else{
         exibirTextoNaTela("p", "numero secreto e maior");
      }
      tentativas++;
      limparCampo();
   }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1 );
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosNaLista == limiteDeNumeros) {
      listaDeNumerosSorteados = [];
   }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
   }else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
   }
   
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = ""; 
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1; 
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
}


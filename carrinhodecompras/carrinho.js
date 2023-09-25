const quantidadeInput = document.getElementById("quantidade");
const mensagemDiv = document.getElementById("mensagem");

quantidadeInput.addEventListener("blur", function() {
  if (quantidadeInput.value.length > 1) {
    mensagemDiv.textContent = "A quantidade máxima é 9.";
    quantidadeInput.value = "";
  }
});

const button = document.getElementById("calcular-frete");
const resultado = document.getElementById("resultado");
// definir valor do frete
const valorFrete = 100;
button.addEventListener("click", function() {
  const cep1 = document.getElementById("cep1").value;
  const cep2 = document.getElementById("cep2").value;
  if (Number.isInteger(parseInt(cep1)) && Number.isInteger(parseInt(cep2))) {
    // ambos os campos contêm números inteiros, pode calcular o frete
    console.log("Calcular frete para CEP", cep1, cep2);
    // exibir valor do frete na tela
    resultado.textContent = `O valor do frete é R$ ${valorFrete.toFixed(2)}`;
  } else {
    // pelo menos um dos campos não contém um número inteiro, mostrar mensagem de erro
    console.log("CEP inválido");
    alert("Por favor, preencha ambos os campos do CEP com números inteiros.");
  }
});

function function1()
{
  alert("Sua Compra foi finalizada")
}

function mouse1(imagem){
  imagem.src="img/mouse2.png"
}
function mouse2(imagem){
  imagem.src="img/mouse-gamer-rgb-7-botoes-7200-dpis-letron-74315--1.png"
}

function mousepad1(imagem){
  imagem.src="img/mousepad2.jpg"
}

function mousepad2(imagem){
  imagem.src="img/mousepad-gamer-redragon-flick-p031-l_111516.png"
}

function teclado1(imagem){
  imagem.src="img/teclado2.png"
}

function teclado2(imagem){
  imagem.src="img/teclado_one_hand.png"
}

function headset1(imagem){
  imagem.src="img/headset2.png"
}

function headset2(imagem){
  imagem.src="img/headset.png"
}

function webcam1(imagem){
  imagem.src="img/webcam2.png"
}

function webcam2(imagem){
  imagem.src="img/webcam1.png"
}
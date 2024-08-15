const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function mostrarCartaoSeleciodo() {
  cartoes[cartaoAtual].classList.add("selecionado");
}
function esconderCartaoSeleciodo() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }
  esconderCartaoSeleciodo();
  cartaoAtual++;
  mostrarCartaoSeleciodo();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual <= 0) {
    return;
  }
  esconderCartaoSeleciodo();
  cartaoAtual--;
  mostrarCartaoSeleciodo();
});

document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('musica');
  audio.play();
});

document.getElementById('stopButton').addEventListener('click', function() {
  var audio = document.getElementById('musica');
  audio.pause();
  audio.currentTime = 0;  // Reseta o áudio para o início
});

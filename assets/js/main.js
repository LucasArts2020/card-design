const cardNumber = document.getElementById("escreverNumero");
const numberCartao = document.getElementById("numero");

cardNumber.addEventListener("input", () => {
  numberCartao.value = cardNumber.value;
});

const nomeInput = document.getElementById("nomeInput");
const nome = document.getElementById("nome");

nomeInput.addEventListener("input", () => {
  nome.value = nomeInput.value;
});

const MM = document.getElementById("MM");
const YY = document.getElementById("YY");
const data = document.getElementById("data");

function dataCartao() {
  data.value = MM.value + "/" + YY.value;
}

MM.addEventListener("input", dataCartao);
YY.addEventListener("input", dataCartao);

const CVC = document.getElementById("CVC");
const cartaoCvc = document.getElementById("cartaoCvc");

CVC.addEventListener("input", () => {
  cartaoCvc.value = CVC.value;
});

const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  document.getElementById("formulario").style.display = "none";
  document.getElementById("divCriada").style.display = "block";
});

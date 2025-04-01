const { calcularDesconto } = require('../utils/calculos');

function aplicarDescontoEExibir(valor, percentual) {
  try {
    const resultado = calcularDesconto(valor, percentual);
    console.log(`O valor final com desconto é: R$${resultado}`);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { aplicarDescontoEExibir };

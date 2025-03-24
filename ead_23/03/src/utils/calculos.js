function calcularDesconto(valorOriginal, percentualDesconto) {
    if (typeof valorOriginal !== 'number' || typeof percentualDesconto !== 'number') {
      throw new Error("Parâmetros devem ser números.");
    }
  
    const valorDesconto = (valorOriginal * percentualDesconto) / 100;
    const valorFinal = valorOriginal - valorDesconto;
  
    return valorFinal;
  }
  
  module.exports = { calcularDesconto };
  
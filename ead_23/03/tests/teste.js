const { calcularDesconto } = require('../src/utils/calculos');

console.log(calcularDesconto(100, 10)); // Deve mostrar 90
console.log(calcularDesconto(200, 20)); // Deve mostrar 160
console.log(calcularDesconto(50, 50));  // Deve mostrar 25

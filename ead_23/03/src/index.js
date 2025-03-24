const { aplicarDescontoEExibir } = require('./services/descontoService');

aplicarDescontoEExibir(100, 10);
aplicarDescontoEExibir(250, 20);
aplicarDescontoEExibir('abc', 15); // Teste de erro

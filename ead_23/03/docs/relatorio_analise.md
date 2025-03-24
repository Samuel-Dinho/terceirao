# Relatório de Análise e Refatoração

## 1️⃣ Trecho Original

```javascript
function calcDescont(vlr, perc) {
  let d = vlr * perc / 100;
  let t = vlr - d;
  console.log("Total com desconto: " + t);
}

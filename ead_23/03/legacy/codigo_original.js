function calcDescont(vlr, perc) {
    let d = vlr * perc / 100;
    let t = vlr - d;
    console.log("Total com desconto: " + t);
  }
  
  calcDescont(100, 10);
  
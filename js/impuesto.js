// console.log("Impuestos");
function impuesto(costo) { 
  var impuesto = 0;
  if (costo <= 20) {  
    impuesto = 0;
  } else if (costo > 20 && costo <= 40) {
     impuesto = (costo - 20) * 0.3;
  } else if (costo > 40 && costo <= 500) {
    impuesto = (20 * 0.3) + (costo - 40) * 0.4;
  } else {
    impuesto = (20 * 0.3) + (460 * 0.4) + (costo - 500) * 0.5;
  }
    return (costo + impuesto).toFixed(2);
}
//  console.log("El precio total es: $" + impuesto(200));
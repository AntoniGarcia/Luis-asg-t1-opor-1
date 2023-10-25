function convertirDinosaurio(nombre, peso, longitud) {
  var pesoKg = ((peso) / 1000).toFixed(2);
  var longitudM = ((longitud) * 0.3048).toFixed(2);
  
  return[ " " + nombre + " " + pesoKg + " " + longitudM];
}
// console.log(convertirDinosaurio("Tyrannosaurus rex", 9000, 40.12));
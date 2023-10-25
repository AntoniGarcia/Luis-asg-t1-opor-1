 function calcularRectangulo(base, altura) {
    
    let perimetro = 2 * (base + altura);
    let superficie = base * altura;
    return {
      perimetro: perimetro,
      superficie: superficie
    };
  }
  let resultado = calcularRectangulo(10, 5);
// console.log("El perímetro es " + resultado.perimetro +" "+ "La superficie  es " + resultado.superficie );

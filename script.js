//ejercicio 3
function esPar(num) {

    return num % 2 === 0;
}
console.log("3/ esPar(121212): " + esPar(121212));
console.log("3/ esPar(749349389): " + esPar(749349389));
//ejercicio 4
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("4/  areaRectangulo(45, 8): "+areaRectangulo(45, 8));
//ejercicio 5
function esMultiplo(a, b) {
    return a % b === 0;
}
console.log("5/  esMultiplo(15, 5): " + esMultiplo(15, 5));
console.log("5/  esMultiplo(10, 3): " + esMultiplo(10, 3));
//ejercicio 6
function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}
console.log("6/  mayorDeTres(10, 25, 5): " + mayorDeTres(10, 25, 5)); 
//ejercicio 7
const promedio = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
};
console.log("7/  promedio(10, 15, 20): " + promedio(10, 15, 20)); 
//ejercicio 8
const convertirAMayusculas = function(texto) {
    return texto.toUpperCase();
};
console.log("8/  convertirAMayusculas('alerta'): " + convertirAMayusculas("alerta"));
//ejercicio 9
const calcularDescuento = function(precio, porcentaje) {
    const descuento = precio * (porcentaje / 100);
    const precioFinal = precio - descuento;
    return precioFinal;
};
console.log("9/  calcularDescuento(670, 10): " + calcularDescuento(100, 10));
//ejercicio10
const saludo = nombre => `Hola, ${nombre}! Helloooo`;
console.log("10/  saludo('Chamana'): " + saludo("Chamana"));
//ejercicio11
const esPositivo = num => num > 0;
console.log("11/  esPositivo(59): " + esPositivo(59)); 
console.log("11/   esPositivo(-20): " + esPositivo(-20)); 
console.log("11/  esPositivo(0) :"+ esPositivo(0));
//ejercicio12
const aMayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => `${texto}!`;
const componerTransformaciones = (fn1, fn2) => texto => fn2(fn1(texto));
const transformar = componerTransformaciones(aMayusculas, agregarSigno);
console.log("12/  transformar('hola'): " + transformar("hola"));

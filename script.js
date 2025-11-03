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
console.log("5/  esMultiplo(15, 5): " +esMultiplo(15, 5));
console.log("5/  esMultiplo(10, 3): " +esMultiplo(10, 3));
//ejercicio 6
function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}
console.log("6/  mayorDeTres(10, 25, 5): " + mayorDeTres(10, 25, 5)); 
// ejercicio 7
function promedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
console.log("7/ promedio(10, 15, 20): " + promedio(10, 15, 20));
// ejercicio 8
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}
console.log("8/ convertirAMayusculas('alerta'): " +convertirAMayusculas("alerta"));
// ejercicio 9
function calcularDescuento(precio, porcentaje) {
    const descuento = precio * (porcentaje / 100);
    const precioFinal = precio - descuento;
    return precioFinal;
}
console.log("9/ calcularDescuento(100, 10): "+calcularDescuento(100, 10));
// ejercicio 10
function saludo(nombre) {
    return `Hola, ${nombre}! Helloooo`;
}
console.log("10/ saludo('Chamana'): "+saludo("Chamana"));
// ejercicio 11
function esPositivo(num) {
    return num > 0;
}
console.log("11/ esPositivo(59): " + esPositivo(59));
console.log("11/ esPositivo(-20): " + esPositivo(-20));
console.log("11/ esPositivo(0): " + esPositivo(0));
// ejercicio 12
function aMayusculas(texto) {
    return texto.toUpperCase();
}
function agregarSigno(texto) {
    return `${texto}!`;
}
function componerTransformaciones(fn1, fn2) {
    return function(texto) {
        return fn2(fn1(texto));
    };
}
const transformar = componerTransformaciones(aMayusculas, agregarSigno);
console.log("12/ transformar('hola'): " + transformar("hola"));
// ejercicio 13
function procesarTexto(texto) {
    function limpiarEspacios(t) {
        return t.trim();
    }
    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }
    const limpio = limpiarEspacios(texto);
    const cantidad = contarPalabras(limpio);
    return `Texto limpio: "${limpio}", Cantidad de palabras: ${cantidad}`;
}
console.log("13/ procesarTexto('Espero que este bien'): " + procesarTexto("Espero que este bien"));
// ejercicio 14
function operacionesMatematicas() {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b : "no se puede dividir entre cero";
    return { sumar, restar, multiplicar, dividir };
}
const ops = operacionesMatematicas();
console.log("14/ sumar(10, 5): " +ops.sumar(10, 5));
console.log("14/ restar(10, 5): " +ops.restar(10, 5));
console.log("14/ multiplicar(10, 5): " +ops.multiplicar(10, 5));
console.log("14/ dividir(10, 5): " +ops.dividir(10, 5));
// ejercicio 15
function crearContador(valorInicial = 0) {
    let contador = valorInicial;
    const incrementar = () => ++contador;
    const resetear = () => (contador = valorInicial);
    return { incrementar, resetear };
}
const miContador = crearContador(5);
console.log("15/ incrementar(): " +miContador.incrementar());
console.log("15/ incrementar(): " +miContador.incrementar());
console.log("15/ resetear(): " + miContador.resetear());
// ejercicio 16
function acumulador(valorInicial = 0) {
    let total = valorInicial;
    return function(nuevoValor) {
        total += nuevoValor;
        return total;
    };
}
const acum = acumulador(10);
console.log("16/ acum(5): " +acum(5));
console.log("16/ acum(10): " +acum(10));
// ejercicio 17
function saludo(nombre = "Fernafloo") {
    return `Hola, ${nombre}!`;
}
console.log("17/ saludo(): " + saludo());
console.log("17/ saludo('pedrito'): " + saludo("Pedrito"));
// ejercicio 18
function media(...numeros) {
    const total = numeros.reduce((acc, n) => acc+n, 0);
    return total / numeros.length;
}
console.log("18/ media(5, 10, 15): " + media(5, 10, 15));
// ejercicio 19
function mostrarDatos(nombre, edad, ...hobbies) {
    return `Nombre: ${nombre}, Edad: ${edad}, Hobbies: ${hobbies.join(", ")}`;
}
console.log("19/ mostrarDatos('Ana', 25, 'leer', 'viajar', 'correr'): " + mostrarDatos("Ana", 25, "leer", "viajar", "correr"));
// ejercicio 20
function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
console.log("20/ ejecutarOperacion(suma, 5, 3): " + ejecutarOperacion(suma, 5, 3));
console.log("20/ ejecutarOperacion(resta, 5, 3): " + ejecutarOperacion(resta, 5, 3));
// ejercicio 21
function filtrarArreglo(arr, callback) {
    return arr.filter(callback);
}
const numeros = [1, 2, 3, 4, 5, 6];
console.log("21/ filtrarArreglo(numeros, n => n % 2 === 0): " + filtrarArreglo(numeros, n => n % 2 === 0));
// ejercicio 22
function descargarArchivo(url, callback) {
    console.log("Descargando...");
    setTimeout(() => {
        callback(`Descarga completa de ${url}`);
    }, 1000);
}
descargarArchivo("https://archivo.com/datos.zip", (mensaje) => {
    console.log("22/ " + mensaje);
});
// ejercicio 23
function potencia(base, exponente) {
    if (exponente === 0) return 1;
    return base * potencia(base, exponente - 1);
}
console.log("23/ potencia(2, 4): " + potencia(2, 4));
console.log("23/ potencia(3, 3): " + potencia(3, 3));
// ejercicio 24
function crearSecuencia(inicio, paso) {
    let actual = inicio;
    return function() {
        const valor = actual;
        actual += paso;
        return valor;
    };
}
const secuencia = crearSecuencia(3, 4);
console.log("24/ " + secuencia());
console.log("24/ " + secuencia());
console.log("24/ " + secuencia());
console.log("24/ " + secuencia());
console.log("24/ " + secuencia());





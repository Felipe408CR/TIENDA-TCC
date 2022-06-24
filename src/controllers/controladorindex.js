// entradas == variables

let nombre = "Juan"
let numero = 5
let numeros = [1,2,3,4]
let politico = {
    nombre: "Alvaro",
    poder: "Dinero",
    edad: 64
}

// Controlando etiquetas
// 1. Necesito almacenar una etiqueta en una variable

let titulo = document.getElementById("titulo")
let imagen = document.getElementById("foto")

// 2. Identifico que quiero controlar
// 2.1 Cambiando el texto

titulo.textContent="CHAO"

// 2.2 Cambiando la fuente SRC

imagen.src="https://placeimg.com/640/480/any"
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
let titulo2 = document.getElementById('titulo2')
let boton = document.getElementById("boton")

// 2. Identifico que quiero controlar


// 3 Modificando Estilos
// 3.1 Agregando una clase

titulo.classList.add('text-danger', 'fuente2')

// 3.2 Quitando una clase

titulo2.classList.remove('text-info')
titulo2.classList.add('text-danger')

// 4 Escuchando Eventos

boton.addEventListener("click", function(){

    // 2.1 Cambiando el texto
    titulo.textContent="CHAO"

    // 2.2 Cambiando la fuente SRC
    imagen.src="https://placeimg.com/640/480/any"

})

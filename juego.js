// Preguntas y respuestas
const preguntas = [
    { pregunta: "¿En qué fecha nos conocimos?", opciones: ["10 Ago 2023", "17 Ago 2023", "01 Sep 2023"], respuesta: "17 Ago 2023" },
    { pregunta: "¿Cuál fue nuestro primer regalo especial?", opciones: ["Un peluche", "Un libro", "Una carta"], respuesta: "Un peluche" },
    { pregunta: "¿Cuál es nuestra canción?", opciones: ["Perfect - Ed Sheeran", "Y que me Pasa - Mickey Taberas", "La noche mas linda - Adalberto Santiago"], respuesta: "La noche mas linda - Adalberto Santiago" },
    { pregunta: "¿Qué día nos vimos por primera vez?", opciones: ["14 dic 2024", "08 Mar 2024", "06 Dic 2024"], respuesta: "06 Dic 2024" }
];

let preguntaActual = 0;
let puntaje = 0;

const preguntaTexto = document.getElementById("question-text");
const botonesRespuestas = document.getElementById("answer-buttons");
const puntajeTexto = document.getElementById("score");

function iniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    limpiarOpciones();
    let pregunta = preguntas[preguntaActual];
    preguntaTexto.innerText = pregunta.pregunta;
    
    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.classList.add("btn");
        boton.onclick = () => seleccionarRespuesta(opcion, pregunta.respuesta);
        botonesRespuestas.appendChild(boton);
    });
}

function seleccionarRespuesta(opcionSeleccionada, respuestaCorrecta) {
    if (opcionSeleccionada === respuestaCorrecta) {
        puntaje++;
    }
    
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    preguntaTexto.innerText = ` ¡Juego terminado! Tu puntaje fue: ${puntaje} de ${preguntas.length}`;
    botonesRespuestas.innerHTML = "";
    
    if (puntaje === preguntas.length) {
        puntajeTexto.innerHTML = "🎉 ¡Eres un experto en nuestra historia! 🎉 <br> <a href='sorpresa-juego.html' class='boton-volver'>Ver la sorpresa</a>";
    } else {
        puntajeTexto.innerText = "Puedes intentarlo de nuevo si quieres. ❤️";
    }
}

function limpiarOpciones() {
    botonesRespuestas.innerHTML = "";
}

iniciarJuego();
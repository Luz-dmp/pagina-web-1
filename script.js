const sections = [
    { title: "Nuestra Historia", text: "Desde el primer día hasta hoy, cada momento ha sido especial." , content: ' <a href="historia.html" class="boton-volver">ver historia</a>' },
    { title: "Galeria", text: "Para revivir bellos momentos.", content: '<a href="galeria.html" class="boton-volver">Ver la galeria</a>' },
    { title: "Cartas Digitales", text: "Cartas especiales para ti.", content: '<a href="cartas.html" class="boton-volver">Leer Cartas</a>' },
    { title: "Juego Interactivo", text: "¿Cuánto conoces de nuestra relación?", content: '<a href="juego.html"  class="boton-volver">Jugar</a>' },
    { title: "Sorpresa Final", text: "Un mensaje especial para ti.", content: '<a href="sorpresa.html"  class="boton-volver">Descubrir</a>' }
];

function showSection(index) {
    document.getElementById("contentTitle").innerText = sections[index].title;
    document.getElementById("contentText").innerText = sections[index].text;
    document.getElementById("extraContent").innerHTML = sections[index].content || "";
    document.getElementById("contentBox").style.display = "block";
}

function closeSection() {
    document.getElementById("contentBox").style.display = "none";
}


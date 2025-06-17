
// JavaScript para el efecto de scroll en el header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

// JavaScript para cerrar el menú móvil al hacer clic en un enlace
const links = document.querySelectorAll(".navlist a");
const toggle = document.getElementById("menu-toggle");

links.forEach(link => {
    link.addEventListener("click", () => {
        toggle.checked = false; // Desmarca el checkbox para cerrar el menú
    });
});

// JavaScript para el loader de la página
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0"; // Inicia la transición de opacidad
    loader.style.pointerEvents = "none"; // Deshabilita interacciones con el loader

    // Después de un breve retraso, oculta el loader completamente
    setTimeout(() => {
        loader.style.display = "none";
    }, 500); // 500ms (0.5 segundos) coincide con la duración de la transición CSS si la tienes
});

// ********** NUEVO JAVASCRIPT PARA LOS BOTONES DE SEDES Y MAPAS **********
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de sede y todos los contenedores de mapa
    const botones = document.querySelectorAll('.boton-sede');
    const mapas = document.querySelectorAll('.mapa-sede');

    // Asegurar que el primer botón y su mapa asociado estén activos al cargar la página
    // Esto es útil por si el usuario entra directamente a donde-estamos.html
    if (botones.length > 0 && mapas.length > 0) {
        // Remover la clase 'activo' por si acaso ya está en otro elemento (buena práctica)
        botones.forEach(btn => btn.classList.remove('activo'));
        mapas.forEach(map => map.classList.remove('activo'));

        // Activar el primer botón y el primer mapa por defecto
        botones[0].classList.add('activo');
        mapas[0].classList.add('activo');
    }

    // Añade un 'event listener' a cada botón
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            // Obtiene el tipo de sede (por ejemplo, 'f8' o 'f5') del atributo data-tipo del botón clickeado
            const tipo = this.dataset.tipo;

            // 1. Oculta todos los botones y mapas
            // Remueve la clase 'activo' de todos los botones
            botones.forEach(btn => btn.classList.remove('activo'));
            // Remueve la clase 'activo' de todos los contenedores de mapa
            mapas.forEach(map => map.classList.remove('activo'));

            // 2. Muestra el botón y el mapa correspondiente
            // Añade la clase 'activo' al botón que fue clickeado (para resaltarlo)
            this.classList.add('activo');
            // Muestra el mapa que corresponde al tipo de sede seleccionado
            document.getElementById(`mapa-${tipo}`).classList.add('activo');
        });
    });
});
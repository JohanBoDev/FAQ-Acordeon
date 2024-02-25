function cambiarEstado(acordeon) {
    var masIcono = acordeon.querySelector(".mas");
    var menosIcono = acordeon.querySelector(".menos");
    
    // Encuentra el elemento hermano siguiente que es la respuesta correspondiente
    var respuesta = acordeon.nextElementSibling;
    if (respuesta && respuesta.classList.contains('respuesta')) {
        // Verifica si la respuesta está actualmente visible
        var respuestaVisible = respuesta.style.display !== "none";

        // Cambia la visibilidad de la respuesta
        respuesta.style.display = respuestaVisible ? "none" : "block";

        // Muestra u oculta los iconos según el estado de la respuesta
        masIcono.style.display = respuestaVisible ? "inline" : "none";
        menosIcono.style.display = respuestaVisible ? "none" : "inline";
    }
}

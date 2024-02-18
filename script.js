document.addEventListener("DOMContentLoaded", function() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        var divsOverlay = document.querySelectorAll(".overlay");
        divsOverlay.forEach(div => {
            div.style.opacity = 1;
        });

        var divsProyecto = document.querySelectorAll(".proyecto");
        divsProyecto.forEach(div => {
            var imagenes = div.querySelectorAll("img");
            imagenes.forEach(img => {
                img.style.opacity = 0.2;
            });
        });
    }
});
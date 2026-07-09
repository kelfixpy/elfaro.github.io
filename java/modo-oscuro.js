// 1. COMPROBACIÓN INMEDIATA (Evita el parpadeo blanco al cambiar de página)
(function() {
    const modoGuardado = localStorage.getItem("tema-claro");
    if (modoGuardado === "activo") {
        document.documentElement.classList.add("light-mode-active");
        // Aplicamos el filtro al HTML completo antes de que renderice
        document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    }
})();

// 2. CONFIGURACIÓN DEL BOTÓN (Cuando el HTML termina de cargar)
document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById("btn-modo");
    const iconoModo = document.getElementById("icono-modo");

    // Sincronizar el icono (Sol o Luna) si el modo claro ya venía activo
    if (document.documentElement.classList.contains("light-mode-active") && iconoModo) {
        iconoModo.classList.replace("fa-moon", "fa-sun");
        reInvertirElementos();
    }

    if (btnModo) {
        btnModo.addEventListener("click", () => {
            // Alternamos la clase en el HTML
            const esClaro = document.documentElement.classList.toggle("light-mode-active");
            
            // Guardamos la elección en la memoria del navegador (localStorage)
            localStorage.setItem("tema-claro", esClaro ? "activo" : "inactivo");
            
            if (esClaro) {
                document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
                if (iconoModo) iconoModo.classList.replace("fa-moon", "fa-sun");
                reInvertirElementos();
            } else {
                document.documentElement.style.filter = "";
                if (iconoModo) iconoModo.classList.replace("fa-sun", "fa-moon");
                reInvertirElementos(true); // Limpiar filtros de imágenes
            }
        });
    }
});

// 3. FUNCIÓN COMPLEMENTARIA: Evita que fotos, videos y mapas se vean con colores raros
function reInvertirElementos(limpiar = false) {
    // Buscamos todas las imágenes, mapas o videos de la página actual
    const elementosAExcluir = document.querySelectorAll("img, video, iframe, .contenedor-mapa-rustico, .contenedor-mapa-medieval");
    
    elementosAExcluir.forEach(el => {
        if (limpiar) {
            el.style.filter = "";
        } else {
            // Los volvemos a invertir para que cancelen el filtro global y se vean normales
            el.style.filter = "invert(1) hue-rotate(180deg)";
        }
    });
}
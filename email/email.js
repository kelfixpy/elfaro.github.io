// 1. Inicializa EmailJS 
emailjs.init("7utLRznkj8OH2GXnU");

const formulario = document.getElementById("form-contacto");
const btnEnviar = document.getElementById("btn-enviar");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelectorAll(".error-txt").forEach(e => { e.style.display = "none"; e.textContent = ""; });
    document.getElementById("mensaje-exito").style.display = "none";
    document.getElementById("mensaje-error-general").style.display = "none";

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const tipoConsulta = document.getElementById("tipo_consulta").value; 
    const mensaje = document.getElementById("mensaje").value.trim();

    let formularioValido = true;

    if (nombre === "") {
        mostrarError("error-nombre", "Por favor, ingrese el nombre.");
        formularioValido = false;
    }
    if (apellido === "") {
        mostrarError("error-apellido", "Por favor, ingrese el apellido.");
        formularioValido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo)) {
        mostrarError("error-correo", "Ingrese un correo electrónico válido.");
        formularioValido = false;
    }

    if (telefono.length < 6) {
        mostrarError("error-telefono", "Ingrese un número válido.");
        formularioValido = false;
    }

    if (asunto === "") {
        mostrarError("error-asunto", "Declare el asunto de la consulta.");
        formularioValido = false;
    }
    if (tipoConsulta === "") {
        mostrarError("error-tipo", "Declare el tipo de consulta.");
        formularioValido = false;
    }
    if (mensaje.length < 5) {
        mostrarError("error-mensaje", "El mensaje es demasiado corto.");
        formularioValido = false;
    }

    //  ENVÍO CON EMAILJS 
    if (formularioValido) {
        btnEnviar.textContent = "ENVIANDO ...";
        btnEnviar.disabled = true;

        const serviceID = "service_v8z07d9";
        const templateID = "template_hc25vn4";

        emailjs.sendForm(serviceID, templateID, "#form-contacto")
            .then(() => {
                document.getElementById("mensaje-exito").style.display = "block";
                formulario.reset(); 
            }, (error) => {
                document.getElementById("mensaje-error-general").style.display = "block";
                console.error("Fallo del servicio EmailJS: ", error);
            })
            .finally(() => {
                btnEnviar.textContent = "ENVIAR";
                btnEnviar.disabled = false;
            });
    }
});

function mostrarError(idContenedor, mensaje) {
    const elemento = document.getElementById(idContenedor);
    if(elemento) {
        elemento.textContent = mensaje;
        elemento.style.display = "block";
    }
}
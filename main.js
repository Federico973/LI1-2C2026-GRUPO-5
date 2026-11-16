const boton = document.getElementById("btn-modo"); 
const CLAVE = "modo";

function aplicarModo(oscuro) {
    document.body.classList.toggle("oscuro", oscuro);
    if (boton) {
        boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    }
}

const modoGuardado = localStorage.getItem(CLAVE) === "oscuro";
aplicarModo(modoGuardado);

if (boton) {
    boton.addEventListener("click", () => {
        const oscuro = !document.body.classList.contains("oscuro");
        aplicarModo(oscuro);
        try {
            localStorage.setItem(CLAVE, oscuro ? "oscuro" : "claro");
        } catch (e) {}
    });
}

const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje-formulario");
if (formulario && mensaje) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

    if (!formulario.checkValidity()) {
        mensaje.textContent = "Error: Por favor, completá todos los campos correctamente.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Formulario enviado correctamente! Gracias por contactarnos.";
        mensaje.style.color = "green";
        formulario.reset();
    }

    setTimeout(function() {
        mensaje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});
}

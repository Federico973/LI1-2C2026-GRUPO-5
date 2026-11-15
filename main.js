const boton = document.getElementById("btn-modo"); 
const CLAVE = "modo";

function aplicarModo(oscuro) {
    document.body.classList.toggle("oscuro", oscuro);
    if (boton) {
        boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    }
}

if (boton) {
    boton.addEventListener("click", () => {
        const oscuro = !document.body.classList.contains("oscuro");
        aplicarModo(oscuro);
        try {
            localStorage.setItem(CLAVE, oscuro ? "oscuro" : "claro");
        } catch (e) {}
    });
}
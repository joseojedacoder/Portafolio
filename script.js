document.getElementById("copyButton").addEventListener("click", function() {
    // Obtener el texto del email
    const email = document.getElementById("email").innerText;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("¡Correo copiado!");
        })
        .catch(err => {
            console.error("Error al copiar el texto:", err);
        });
});
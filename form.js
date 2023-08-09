document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let messageElement = document.getElementById("message");
    if (nombre && email && mensaje) {
        messageElement.style.color = "green";
        messageElement.textContent = "¡Mensaje Enviado!";
    } else {
        messageElement.style.color = "red";
        let missingFields = [];
        if (!nombre) missingFields.push("Nombre");
        if (!email) missingFields.push("Email");
        if (!mensaje) missingFields.push("Mensaje");
        messageElement.textContent = `Error: Por favor, completa los siguientes campos: ${missingFields.join(", ")}.`;
    }
    let opacity = 1;
    let intervalId = setInterval(function() {
        opacity -= 0.1;
        if (opacity <= 0) {
            clearInterval(intervalId);
            messageElement.textContent = "";
            messageElement.style.opacity = 1;
        } else {
            messageElement.style.opacity = opacity;
        }
    }, 500);
});


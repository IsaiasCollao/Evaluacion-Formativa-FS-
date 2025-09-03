document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Previene el envío automático

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errores = document.getElementById("errores");

    // Limpiar errores anteriores
    errores.textContent = "";

    // Validaciones
    if (nombre === "" || apellido === "" || email === "" || password === "") {
        errores.textContent = "Todos los campos son obligatorios.";
        return;
    }

    // Validar email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.textContent = "El email no es válido.";
        return;
    }

    // Si todo está bien, puedes enviar el formulario manualmente o hacer otra acción
    alert("Formulario enviado correctamente 🎉");
    // this.submit(); // Descomenta si deseas enviarlo realmente
});

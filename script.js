document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault(); //evita que la página se recargue

    //se define usuario y contraseña
    const usuarioValido = "ReedHycalogPR"
    const passwordValido = "NOVENERGY2026"

    //obtener datos ingresados por la persona
    const usuarioIngresado = document.getElementById('username').value;
    const passwordIngresado = document.getElementById('password').value;
    const mensajeError = document.getElementById('error-message');

    //validar credenciales
    if (usuarioIngresado === usuarioValido && passwordIngresado === passwordValido){
        //redirigir a la página principal del sistema
        window.location.href = "inicio.html";    
    } else {
        //mostrar mensaje de error si está mal
        mensajeError.textContent = "Usuario o contraseña incorrectos.";

    }
});
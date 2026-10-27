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

// Selección de elementos
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

// Evento al hacer clic en el ojito
togglePasswordBtn.addEventListener('click', function () {
  // Verificamos el tipo actual del campo de contraseña
  const isPassword = passwordInput.getAttribute('type') === 'password';
  
  if (isPassword) {
    // Si está en tipo password, lo cambiamos a text para mostrar la contraseña
    passwordInput.setAttribute('type', 'text');
    
    // Opcional: Cambiar el diseño del SVG para simular un ojo tachado
    eyeIcon.innerHTML = `
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    `;
  } else {
    // Si está en tipo text, lo volvemos a cambiar a password para ocultarla
    passwordInput.setAttribute('type', 'password');
    
    // Restaurar el ojo normal
    eyeIcon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    `;
  }
});

   

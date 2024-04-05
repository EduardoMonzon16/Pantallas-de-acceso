document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validar usuario y contraseña (en este caso, sólo un ejemplo)
    if (username === 'usuario' && password === 'contraseña') {
      // Si las credenciales son correctas, redirigir a la página de inicio
      window.location.href = 'bienvenido.html';
    } else {
      // Mostrar mensaje de error
      document.getElementById('error').innerText = 'Usuario o contraseña incorrectos';
    }
  });
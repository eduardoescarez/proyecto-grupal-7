document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#login').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        var esValido = true;
        if (!username){
            alert("Por favor, ingrese su nombre de usuario.");
            esValido = false;
        }
        if (!password){
            alert("Por favor, ingrese su contraseña.");
            esValido = false;
        }
        if (esValido) {
            if (username === password) {
                window.location.href = "landing.html";
            } else {
                alert("Nombre de usuario o contraseña incorrectos.");
                document.querySelector('#username').value = '';
                document.querySelector('#password').value = '';
            }
        }   
    });          
});
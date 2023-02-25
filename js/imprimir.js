let usuarioTXT = document.getElementById("usuario");
let passwordTXT = document.getElementById("campoPassword");
let p = document.getElementById("mensaje");


function togglePassword(){
    var campo = document.getElementById("campoPassword");
    var mensaje = document.getElementById("vistaPassword");

    if(campo.type == "password"){
        campo.type = "text";
        mensaje.textContent = "Ocultar Password";
    } else{
        campo.type = "password";
        mensaje.textContent = "Mostrar Password";
    }
}

function login(){
    p.innerHTML = "Login correcto, " + usuarioTXT.value;
    limpiar();
}

function registro(){
    p.innerHTML = "Registro correcto, " + usuarioTXT.value;
    limpiar();
}

function limpiar(){
    usuarioTXT.value = "";
    passwordTXT.value = "";
}

const C_NOMBRE = document.querySelector("[data-form-nombre]");
const C_EMAIL = document.querySelector("[data-form-email]");
const C_ASUNTO = document.querySelector("[data-form-asunto]");
const C_MENSAJE = document.querySelector("[data-form-mensaje]");
const C_SUBMIT = document.querySelector("[data-form-submit]");

// validacion de cada input

const validarNombre = (nombre) => {
    const nombreValue = nombre.value;
    if(nombreValue == "" || nombreValue.length > 50) {
        console.log("El campo nombre es incorrecto: Esta vacio o tiene mas de 50 caracteres");
        return false;
    } else {
        console.log("continue: " + nombreValue );
        return true;
    }
}
const validarEmail = (email) => {
    const valueEmail = email.value;
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(valueEmail) && valueEmail == "") {
        console.log("Email invalido");
        return false;
    } else {
        console.log("Email correcto: " + valueEmail);
        return true;
    }
}
const validarAsunto = (asunto) => {
    const asuntoValue = asunto.value;
    if(asuntoValue == "" || asuntoValue.length > 50) {
        console.log("Error en el campo asunto: El campo esta vacio o tiene mas de 50 caracteres");
        return false;
    } else {
        console.log("continue: " + asuntoValue);
        return true;
    }
}
const validarMensaje = (mensaje) => {
    const mensajeValue = mensaje.value;
    if(mensajeValue == "" || mensajeValue.length > 300) {
        console.log("Error en el campo de mensaje: El campo esta vacio o contiene mas de 300 caracteres");
        return false;
    } else {
        console.log("continue: " + mensajeValue);
        return true;
    }
}

//false: habilita el boton y su css

const buttonEnabled = () => {
    C_SUBMIT.disabled = false;
    C_SUBMIT.style.setProperty('--cursor-hover', 'pointer');
    C_SUBMIT.style.setProperty('--opacity-button','1');
}

//funcion: boton desactivado o no

function habilitar() {
    if (C_NOMBRE.value === "" || C_EMAIL.value === "" || C_ASUNTO.value === "" || C_MENSAJE.value === "") {
        C_SUBMIT.disabled = true;
    } else {
        buttonEnabled();
    }
}

//al hacer click ejecuta todas las funciones de validacion
const test = () => {
    validarNombre(C_NOMBRE);
    validarEmail(C_EMAIL);
    validarAsunto(C_ASUNTO);
    validarMensaje(C_MENSAJE);
}

C_SUBMIT.addEventListener("click", test);
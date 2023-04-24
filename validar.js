

export function validar (input) {
    const tipoInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid"); 
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(input,tipoInput)
    }
    
}

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo Nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo Email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El campo Asunto no puede estar vacio"
    },
    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacio"
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
]

function mostrarMensajeError (input, tipoInput) {
    let  mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoInput][error]
        }
    })
    return mensaje
}


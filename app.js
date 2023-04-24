import { validar } from "./validar.js"

const inputs = document.querySelectorAll("input");
const mensaje = document.querySelector("#mensajem")


inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target)
    })
})

mensaje.addEventListener("blur", (mensaje) => validar(mensaje.target))



//validación del formulario

let formulario = document.getElementById("formulario");
let mensajeExito = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();

  let textNombre = document.getElementById("nombre").value;
  let textCorreo = document.getElementById("email").value;
  let textMensaje = document.getElementById("mensaje").value;
  let resultado = validar(textNombre, textCorreo, textMensaje);

  if (resultado == true) {
    mensajeExito.innerHTML = "Mensaje enviado con éxito!!";
    const inputs = document.querySelectorAll("input");
    const textArea = document.querySelectorAll("textarea");

    inputs.forEach((input) => (input.value = ""));
    textArea.forEach((textarea) => (textarea.value = ""));
  } else {
    mensajeExito.innerHTML = "";
  }
});

function limpiarErrores() {
  mensajeExito.innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorCorreo").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function validar(nombre, correo, mensaje) {
  let pasamosLaValidacion = true;
  let validacionNombre = /^[a-zA-Z]+$/gim;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    pasamosLaValidacion = false;
  }

  let validacionCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
  if (validacionCorreo.test(correo) == false) {
    document.querySelector(".errorCorreo").innerHTML = "El correo es requerido o tal vez te faltó la @";
    pasamosLaValidacion = false;
  }

  let validacionMensaje = /^[a-zA-Z]+$/gim;
  if (validacionMensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}

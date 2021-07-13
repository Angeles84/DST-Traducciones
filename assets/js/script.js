//Archivo adjunto aparece en el párrafo

let archivo = document.querySelector("#input-file");
archivo.addEventListener("change" , () => {
  document.querySelector("#placeholder").innerHTML = archivo.files[0].name;
})



//validación del formulario

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();

  let textNombre = document.getElementById("nombre").value;
  let textCorreo = document.getElementById("email").value;
  let textMensaje = document.getElementById("mensaje").value;
  let resultado = validar(textNombre, textCorreo, textMensaje);
  let modal = document.getElementById("modal");

  if (resultado == true) {
    const inputs = document.querySelectorAll("input");
    const textArea = document.querySelectorAll("textarea");

    inputs.forEach((input) => (input.value = ""));
    textArea.forEach((textarea) => (textarea.value = ""));
    document.querySelector("#placeholder").style.opacity = '0';
    $(modal).modal("show");
  } else {
    $(modal).modal("hide");
  }
});

function limpiarErrores() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorCorreo").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function validar(nombre, correo, mensaje) {
  let pasamosLaValidacion = true;
  let validacionNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    pasamosLaValidacion = false;
  }

  let validacionCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
  if (validacionCorreo.test(correo) == false) {
    document.querySelector(".errorCorreo").innerHTML = "El correo es requerido o tal vez te faltó la @";
    pasamosLaValidacion = false;
  }

  let validacionMensaje = /^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]+$/g; 
  if (validacionMensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}

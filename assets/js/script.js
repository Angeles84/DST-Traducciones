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
 
  if (nombre == "") {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    pasamosLaValidacion = false;
  }

  let validacionCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
  if (validacionCorreo.test(correo) == false) {
    document.querySelector(".errorCorreo").innerHTML = "El correo es requerido o tal vez te faltó la @";
    pasamosLaValidacion = false;
  }

  if (mensaje == "") {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}

/**
 "use strict";
let archivo = document.querySelector("#archivo");
archivo.addEventListener("change" , () => {
  document.querySelector("#placeholder").innerHTML = archivo.files[0].name;
})

//validación del formulario

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();
  limpiarErrores();

  let textNombre = document.getElementById("nombre").value;
  let textCorreo = document.getElementById("email").value;
  let textMensaje = document.getElementById("mensaje").value;
  let textArchivo = document.getElementById("archivo").value;
  let resultado = validar(textNombre, textCorreo, textMensaje);
  let modal = document.getElementById("modal");

  if (resultado) {
    try {
      const formData = new FormData();
      formData.append("nombre", textNombre);
      formData.append("email", textCorreo);
      formData.append("mensaje", textMensaje);
      formData.append("archivo" , textArchivo);
      await fetch("/contacto-api.php",{
        method: "POST",
        body: formData
      })
      limpiarInputs();
      $(modal).modal("show");
    } catch (error) {
      console.error(error)
    }
   
  } else { 
    $(modal).modal("hide");
  }
});

function limpiarInputs() {
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelectorAll("textarea");

  inputs.forEach((input) => (input.value = ""));
  textArea.forEach((textarea) => (textarea.value = ""));
  document.querySelector("#placeholder").innerHTML = 'Ningún archivo seleccionado';
}

function limpiarErrores() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorCorreo").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function validar(nombre, correo, mensaje) {
  let pasamosLaValidacion = true;
 
  if (nombre == "") {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    pasamosLaValidacion = false;
  }

  let validacionCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
  if (validacionCorreo.test(correo) == false) {
    document.querySelector(".errorCorreo").innerHTML = "El correo es requerido o tal vez te faltó la @";
    pasamosLaValidacion = false;
  }

  if (mensaje == "") {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}

/*
scrollBehavior() {
    return { x: 0, y: 0 };
  },
*/
 
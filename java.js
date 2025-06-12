document.addEventListener('DOMContentLoaded', function() {
  var ingresar = document.getElementById("ingresar");
  
  if (ingresar) {
    ingresar.addEventListener('click', alerta);
  } else {
    console.error("No se encontró el elemento con el id 'ingresar'");
  }
});

function alerta() {
  window.location.href="csia.html";
}

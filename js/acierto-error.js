function acierto(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").cloneNode().play();
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").cloneNode().play();

  setTimeout(function () {
    lasTarjetas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}

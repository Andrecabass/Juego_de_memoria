function finalizar() {
  //document.querySelector("#gameOver").classList.remove("visible");
  clearInterval(cronometro);

  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}

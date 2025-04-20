// filepath: s:\UNINASSAU 1ª periodo\LOGICA DE PROGRAMAÇÃO\atividade_tempo\time2.js
function verificarTurno() {
  const turno = document.getElementById("turno").value.toLowerCase();
  let mensagem;

  if (turno === "manha") {
      mensagem = "Bom dia!";
  } else if (turno === "tarde") {
      mensagem = "Boa tarde!";
  } else if (turno === "noite") {
      mensagem = "Boa noite!";
  } else {
      mensagem = "Turno inválido!";
  }

  document.getElementById("resultado").innerText = mensagem;
}
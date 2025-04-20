function verificarTurno() {
    const turno = document.getElementById("turno").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    let mensagem;

    // Verifica o valor do turno e define a mensagem correspondente
    if (turno === "manha") {
        mensagem = "Bom dia!";
        resultado.className = "valido"; // Aplica a classe 'valido'
    } else if (turno === "tarde") {
        mensagem = "Boa tarde!";
        resultado.className = "valido"; // Aplica a classe 'valido'
    } else if (turno === "noite") {
        mensagem = "Boa noite!";
        resultado.className = "valido"; // Aplica a classe 'valido'
    } else {
        mensagem = "Turno inválido!";
        resultado.className = "invalido"; // Aplica a classe 'invalido'
    }

    // Exibe a mensagem no elemento com o ID "resultado"
    resultado.innerText = mensagem;
}
// Lista de participantes armazenada no localStorage
const participantes = JSON.parse(localStorage.getItem("participantes")) || [];

// Seleção de elementos do DOM
const btnAdicionar = document.getElementById("btnAdicionar");
const btnSortear = document.getElementById("btnSortear");
const btnLimpar = document.getElementById("btnLimpar");
const dialogResultado = document.getElementById("dialogResultado");
const resultadoTexto = document.getElementById("resultadoTexto");
const btnFecharDialogo = document.getElementById("btnFecharDialogo");

// Atualiza localStorage com a lista atualizada
function salvarParticipantes() {
    localStorage.setItem("participantes", JSON.stringify(participantes));
}

// Função para adicionar participantes
btnAdicionar.addEventListener("click", () => {
    const nome = prompt("Digite o nome do participante:");
    if (nome) {
        participantes.push(nome);
        salvarParticipantes();
        alert(`Participante ${nome} adicionado!`);
    } else {
        alert("Nenhum nome foi inserido.");
    }
});

// Função para sortear participantes
btnSortear.addEventListener("click", () => {
    if (participantes.length < 2) {
        alert("É necessário pelo menos 2 participantes para realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const sorteado = participantes[indiceSorteado];

    resultadoTexto.textContent = `O sorteado foi: ${sorteado}`;
    dialogResultado.showModal();
});

// Função para fechar o diálogo de resultado
btnFecharDialogo.addEventListener("click", () => {
    dialogResultado.close();
});

// Função para recomeçar o sorteio
btnLimpar.addEventListener("click", () => {
    participantes.length = 0; // Limpa a lista de participantes
    salvarParticipantes(); // Atualiza o localStorage
    alert("O sorteio foi reiniciado. Todos os dados foram apagados.");
    location.reload(); // Recarrega a página
});

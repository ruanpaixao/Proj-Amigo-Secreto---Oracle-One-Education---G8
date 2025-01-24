// Variáveis para armazenar participantes
const participantes = JSON.parse(localStorage.getItem("participantes")) || [];

document.getElementById("btnAdicionar").addEventListener("click", () => {
    const nome = prompt("Digite o nome do participante:");
    if (nome) {
        participantes.push(nome);
        localStorage.setItem("participantes", JSON.stringify(participantes));
        alert("Participante adicionado com sucesso!");
    }
});


// Elementos do DOM
const sorteador = document.getElementById("sorteador");
const consulta = document.getElementById("consulta");
const dialogResultado = document.getElementById("dialogResultado");
const resultadoTexto = document.getElementById("resultadoTexto");
const listaParticipantes = document.getElementById("listaParticipantes");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnConsultar = document.getElementById("btnConsultar");
const btnSortear = document.getElementById("btnSortear");
const btnFecharDialogo = document.getElementById("btnFecharDialogo");
const btnVoltar = document.getElementById("btnVoltar");

// Funções auxiliares
function mostrarPagina(pagina) {
    sorteador.classList.add("oculto");
    consulta.classList.add("oculto");
    pagina.classList.remove("oculto");
}

function atualizarListaParticipantes() {
    listaParticipantes.innerHTML = "";
    participantes.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nome}`;
        listaParticipantes.appendChild(li);
    });
}

// Eventos
btnAdicionar.addEventListener("click", () => {
    const nome = prompt("Digite o nome do participante:");
    if (nome) {
        participantes.push(nome);
        alert("Participante adicionado com sucesso!");
    }
});

btnConsultar.addEventListener("click", () => {
    atualizarListaParticipantes();
    mostrarPagina(consulta);
});

btnSortear.addEventListener("click", () => {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes antes de sortear.");
        return;
    }
    const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    resultadoTexto.textContent = `O sorteado foi: ${sorteado}`;
    dialogResultado.showModal();
});

btnFecharDialogo.addEventListener("click", () => {
    dialogResultado.close();
});

btnVoltar.addEventListener("click", () => {
    mostrarPagina(sorteador);
});

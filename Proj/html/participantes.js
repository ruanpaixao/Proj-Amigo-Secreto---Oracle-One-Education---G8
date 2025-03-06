const listaParticipantes = document.getElementById("listaParticipantes");

// Recupera os participantes do localStorage
const participantes = JSON.parse(localStorage.getItem("participantes")) || [];

if (participantes.length === 0) {
    listaParticipantes.innerHTML = "<li>Nenhum participante adicionado ainda.</li>";
} else {
    participantes.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nome}`;
        listaParticipantes.appendChild(li);
    });
}

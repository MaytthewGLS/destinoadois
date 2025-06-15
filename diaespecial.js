const surpresas = [
  "Dia de filmes ❤️",
  "Ir ao cinema 📽️",
  "Ir ao museu ⚱️",
  "Ida ao vila trampolin 🏃‍♀️",
  "Ir a uma loja de jogos (Arcade) 🎮",
  "Bolichezinho 🎳",
  "Ir ao Teatro 🎭",
  "Exposição de culinária 🍲",
  "Passeio no Museu de Iotin 🏛️",
  "Tour no presídio (corajosos hein) 🔐",
  "Karaokê 🎤",
  "Pintura ao ar livre 🖌️",
  "Piquenique 🍓🌷",
  "Trilha em parque 🥾",
  "X1 valendo o cu 🕳️😂",
  "Visitar reserva de animais 🐾",
  "Relaxar em casa com mimo 💆‍♀️",
  "Dançar juntos em casa 💃",
  "Comida mexicana 🌯",
  "Ir a um parque florido 🌼",
  "Restaurante chinês 🥡"
];

function abrirCartinha(cartinha) {
  cartinha.classList.toggle("virada");
}

function adicionarPromessa(event) {
  event.preventDefault();

  const input = document.getElementById('input-promessa');
  const texto = input.value.trim();

  if (texto !== "") {
    const lista = document.getElementById('lista-promessas');
    const novaPromessa = document.createElement('li');
    novaPromessa.textContent = texto;
    lista.appendChild(novaPromessa);
    input.value = ""; // limpa o campo
  }
}


function mostrarSurpresa() {
  const index = Math.floor(Math.random() * surpresas.length);
  const texto = surpresas[index];
  const surpresa = document.getElementById("surpresa");
  surpresa.textContent = texto;
  surpresa.style.display = "block";

  document.getElementById("salvar-btn").style.display = "inline-block";
}

function salvarSurpresa() {
  const conteudo = document.getElementById("surpresa").textContent;
  if (!conteudo) return;

  const blob = new Blob([`Nossa ideia especial do dia: ${conteudo}`], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "ideia-do-dia.txt";
  link.click();

  URL.revokeObjectURL(url);
}

// Reutilizando seu alternarModo para manter tudo funcional
function alternarModo() {
  const body = document.body;
  const button = document.getElementById("modo-noite");
  const lua = document.getElementById("lua");

  body.classList.toggle("modo-noite");

  if (body.classList.contains("modo-noite")) {
    button.innerHTML = "🌞 Modo Claro de Encontro";
    if (lua) lua.src = "pictures/Fotos polaroid/moonzada-icon.png";
  } else {
    button.innerHTML = "🌙 Modo Noite de Encontro";
    if (lua) lua.src = "pictures/Fotos polaroid/moon-icon.png";
  }
}

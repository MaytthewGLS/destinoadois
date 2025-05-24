// Botão de cantada aleatória
const LoveButton = document.getElementById('Love-button');
const LoveContainer = document.getElementById('Love-container');
const Love = [
    "“O amor é a única realidade, e não é uma mera sensação, é a verdade eterna que está por trás de tudo o que vemos.” — Rabindranath Tagore",
    "“Amar não é olhar um para o outro, é olhar juntos na mesma direção.” — Antoine de Saint-Exupéry",
    "“Com o amor consegue-se viver mesmo sem fellicidade.” - Fiódor Dostoiévski",
    "“A cada dia, em cada momento, eu me apaixono ainda mais por você.” — Anônimo",
    "“Eu te amo com um amor que é mais que amor.” — Edgar Allan Poe",
    "“Se você sabe explicar o que sente, não ama, pois o amor foge de todas as explicações possíveis.” — Carlos Drummond de Andrade”",
    "“Amar é encontrar na felicidade de outrem a própria felicidade.” — Gottfried Leibniz",
    "“Amar é tão curto, e esquecer é tão longo.” — Pablo Neruda"
];

LoveButton.addEventListener('click', function() {
    const randomlove = Love[Math.floor(Math.random() * Love.length)];
    LoveContainer.textContent = randomlove;
    LoveContainer.style.display = 'block';
    
    clearTimeout(Lovetimeout)
    loveTimeout = setTimeout(() => {
      LoveContainer.style.display = 'none';
  }, 5000);  
});
 
function alternarModo() {
  document.body.classList.toggle('modo-noite');

  const button = document.getElementById("modo-noite");
  const lua = document.getElementById("lua");

  if (document.body.classList.contains("modo-noite")) {
    button.innerHTML = "🌞 Modo Claro de Encontro";
    if (lua) lua.src = "pictures/Fotos polaroid/moonzada-icon.png";

    // Trocar para música do modo noite
    musica.src = "The Weeknd - Call Out My Name.mp3";  // ou qualquer música de noite
  } else {
    button.innerHTML = "🌙 Modo Noite de Encontro";
    if (lua) lua.src = "pictures/Fotos polaroid/moon-icon.png";

    // Voltar para música do modo claro
    musica.src = "French Accordion Music.mp3 ";
  }

  musica.play();
  tocando = true;
}


  function baixarCarta() {
    const conteudo = document.getElementById("carta").value;

    if (!conteudo) {
      alert("Por favor, escreva algo antes de baixar 💌");
      return;
    }

    const blob = new Blob([conteudo], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "carta-de-amor.txt"; // nome do arquivo
    link.click();

    URL.revokeObjectURL(url); // limpar memória
  }

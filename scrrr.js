// Botão de cantada aleatória
const LoveButton = document.getElementById('Love-button');
const LoveContainer = document.getElementById('Love-container');
const Love = [
    "“O amor é a única realidade, e não é uma mera sensação, é a verdade eterna que está por trás de tudo o que vemos.” — Rabindranath Tagore",
    "“Amar não é olhar um para o outro, é olhar juntos na mesma direção.” — Antoine de Saint-Exupéry",
    "“Com o amor consegue-se viver mesmo sem fellicidade.” - Fiódor Dostoiévski",
    "“A cada dia, em cada momento, eu me apaixono ainda mais por você.” — Anônimo",
    "Mr. Bean tentou aprender a nadar. Agora ele só toma banho com guarda-chuva.",
    "Qual é a comida favorita do Mr. Bean? Feijão, é claro!",
    "Mr. Bean foi à escola de arte. Sua obra-prima? Um triângulo com olhos.",
    "Por que o Mr. Bean nunca joga xadrez? Porque ele não consegue decidir qual peça é o ursinho Teddy."
];

LoveButton.addEventListener('click', function() {
    const randomJoke = Love[Math.floor(Math.random() * Love.length)];
    LoveContainer.textContent = randomJoke;
    LoveContainer.style.display = 'block';
    
    
    setTimeout(() => {
        LoveContainer.style.display = 'none';
    }, 9000);
});
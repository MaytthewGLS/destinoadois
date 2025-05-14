// Botão de cantada aleatória
const LoveButton = document.getElementById('Love-button');
const LoveContainer = document.getElementById('Love-container');
const Love = [
    "“O amor é a única realidade, e não é uma mera sensação, é a verdade eterna que está por trás de tudo o que vemos.” — Rabindranath Tagore",
    "“Amar não é olhar um para o outro, é olhar juntos na mesma direção.” — Antoine de Saint-Exupéry",
    "“Com o amor consegue-se viver mesmo sem fellicidade.” - Fiódor Dostoiévski",
    "“A cada dia, em cada momento, eu me apaixono ainda mais por você.” — Anônimo",
    "“Eu te amo com um amor que é mais que amor.” — Edgar Allan Poe",
    "“Se você sabe explicar o que sente, não ama, pois o amor foge de todas as explicações possíveis. — Carlos Drummond de Andrade”",
    "“Amar é encontrar na felicidade de outrem a própria felicidade.” — Gottfried Leibniz",
    "Amar é tão curto, e esquecer é tão longo.” — Pablo Neruda"
];

LoveButton.addEventListener('click', function() {
    const randomJoke = Love[Math.floor(Math.random() * Love.length)];
    LoveContainer.textContent = randomJoke;
    LoveContainer.style.display = 'block';
    
    
    setTimeout(() => {
        LoveContainer.style.display = 'none';
    }, 50000);
});
// Funkcja do generowania losowych emoji 🎉 w różnych miejscach na stronie
function generateCelebrations() {
    const body = document.body;
    const numCelebrations = 5; // Liczba losowych emoji 🎉, które będą na stronie w danym czasie

    setInterval(() => {
        for (let i = 0; i < numCelebrations; i++) {
            const celebration = document.createElement('div');
            celebration.classList.add('celebration');
            
            // Ustawiamy losową pozycję na stronie
            const randomX = Math.random() * window.innerWidth;  // Losowa szerokość
            const randomY = Math.random() * window.innerHeight; // Losowa wysokość
            
            celebration.style.left = `${randomX}px`;
            celebration.style.top = `${randomY}px`;

            // Dodajemy emoji 🎉 do strony
            celebration.textContent = '🎉';
            body.appendChild(celebration);
        }
    }, 500); // Co 500 ms dodajemy nowe emoji
}

// Funkcja uruchamiająca generowanie emoji po kliknięciu przycisku
document.getElementById('startButton').addEventListener('click', () => {
    // Ukrywamy przycisk po kliknięciu, aby użytkownik nie kliknął go ponownie
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('hideMe').style.display = 'none';
    
    // Uruchamiamy funkcję generującą emoji
    generateCelebrations();
});

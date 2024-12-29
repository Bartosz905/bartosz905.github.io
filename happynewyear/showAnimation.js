document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
  
    // Pokazuje popup i uruchamia animację
    openPopupButton.addEventListener('click', () => {
      popup.classList.add('show');
    });
  
    // Ukrywa popup po kliknięciu w przycisk zamknięcia
    closePopupButton.addEventListener('click', () => {
      popup.classList.remove('show');
    });
  
    // Ukrywa popup po kliknięciu poza jego zawartość
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('show');
      }
    });
  });
  
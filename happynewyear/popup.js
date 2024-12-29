document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
  
    openPopupButton.addEventListener('click', () => {
      popup.classList.remove('hidden');
    });
  
    closePopupButton.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.add('hidden');
      }
    });
  });
  
function scrollToSection() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Добавляем интерактивности: меняющийся цвет кнопки при прокрутке
  window.addEventListener('scroll', () => {
    const exploreButton = document.querySelector('.explore-button');
    if (window.scrollY > 200) {
      exploreButton.style.backgroundColor = '#FF9800';
    } else {
      exploreButton.style.backgroundColor = '#4CAF50';
    }
  });
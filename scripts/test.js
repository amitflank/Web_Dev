const productSections = document.querySelectorAll(".product-section");
const circuitContainers = document.querySelectorAll(".circuit-container");

function updateTechBackground() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  productSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      circuitContainers.forEach((container) => {
        container.style.opacity = 0;
      });
      circuitContainers[index].style.opacity = 1;
    }
  });
}

  
window.addEventListener('scroll', () => {
  const circuitContainers = document.querySelectorAll('.circuit-container');
  const productSections = document.querySelectorAll('.product-section');

  productSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      circuitContainers.forEach((container) => {
        container.style.opacity = '0';
      });

      circuitContainers[index].style.opacity = '1';
    }
  });
});

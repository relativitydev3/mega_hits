const button = document.querySelector('.rotate-scale-up');

button.addEventListener('click', () => {
  button.style.animation = 'rotate-scale-up 0.4s linear both';

  // Restaurar la animación después de completarse
  setTimeout(() => {
    button.style.animation = '';
  }, 400); // Duración de la animación en milisegundos
});





const textReplacement = document.getElementById('textReplacement');
const words = ['hits', 'música']; // Palabras a mostrar
let index = 0;

setInterval(() => {
  // Aplicar la clase para desvanecer hacia abajo y ocultar el texto
  textReplacement.classList.add('fadeOutDown');

  setTimeout(() => {
    index = (index + 1) % words.length;
    textReplacement.textContent = words[index];

    // Eliminar la clase y mostrar el texto con la nueva palabra
    textReplacement.classList.remove('fadeOutDown');

    // Forzar un reflow para volver a aplicar la animación
    void textReplacement.offsetWidth;
  }, 500); // Esperar la duración de la transición antes de cambiar el texto
}, 2000); // Cambiar cada segundo




/* Comentario multilínea */
//? Comentario de 1 línea

const primerHola = document.querySelector('#lab h1');
if (primerHola) {
  primerHola.textContent = 'Adiós';
}

const h1Naranja = document.getElementById('naranja');
if (h1Naranja) {
  h1Naranja.style.color = 'orange';
}

const h1Marron = document.getElementById('cambia-marron');
if (h1Marron) {
  h1Marron.style.cursor = 'pointer';       
  h1Marron.addEventListener('click', () => {
    h1Marron.style.color = 'brown';
  });
}


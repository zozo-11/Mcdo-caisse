// Scroll en douceur vers la section Contact
document.getElementById('cta-button').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Exemple : capture du submit du formulaire pour traitement personnalisé
const form = document.querySelector('#contact form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message !');
  form.reset();
});
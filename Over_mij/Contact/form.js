const form = document.getElementById('contactFormulier');

form.addEventListener('submit', function(event) {
  // Voorkom normaal gedrag bij het versturen van een form
  event.preventDefault();

  // Verzamel de gegevens
  const formData = {
    name: document.getElementById('firstName').value,
    email: document.getElementById('email').value,
    message: document.getElementById('msg').value,
  };

  // Check of alle velden ingevuld zijn en meldt als dat niet is gebeurd.
  if (!formData.name || !formData.email || !formData.message) {
    alert('Vul alle velden in.');
    return;
  }

  // Log data
  console.log('Form Data:', formData);

  form.reset();

  alert('Contactgegevens succesvol verstuurd!');

  form.submit();
});
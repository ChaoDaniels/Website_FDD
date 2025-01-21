// Select the form
const form = document.getElementById('contactFormulier');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Collect form data
  const formData = {
    name: document.getElementById('Vnaam').value,
    email: document.getElementById('Mail').value,
//    message: document.getElementById('message').value,
  };

  // Simple validation (example: check if fields are not empty)
  if (!formData.name || !formData.email) {
    alert('Please fill out all fields.');
    return;
  }

  // Example: Log the data or send it to a server
  console.log('Form Data:', formData);

  // Optionally reset the form
  form.reset();

  // Feedback to the user
  alert('Form submitted successfully!');
});

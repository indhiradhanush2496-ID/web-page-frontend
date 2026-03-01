const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    status.textContent = result.message;
    status.style.color = 'green';
    form.reset();
  } catch (error) {
    status.textContent = 'Error sending message!';
    status.style.color = 'red';
  }
});
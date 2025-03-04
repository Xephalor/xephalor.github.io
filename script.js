document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Message sent successfully! We’ll get back to you soon.');
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
// scripts.js
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        document.getElementById('service').value = this.dataset.service;
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, message });
    
    // Here you can add your code to send the form data to your server
    alert('Thank you for your message!');
});

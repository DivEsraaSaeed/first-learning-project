document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation check
    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    alert(`Registration Successful!\n\nName: ${name}\nEmail: ${email}`);
    
    // Optionally, you could submit the form data via AJAX here
});

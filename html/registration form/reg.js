// JavaScript for password validation
document.getElementById('signinForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    
    // Regular expression to validate password
    const passwordPattern = /^[A-Za-z0-9_!@#$%^&*()+=-]{8,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and include only letters, digits, underscores, or special characters (!@#$%^&*()+=-).';
        event.preventDefault(); // Prevent form submission
    } else {
        passwordError.textContent = ''; // Clear error message
    }
});
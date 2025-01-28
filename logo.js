document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const successMessage = document.getElementById('successMessage');

    // Check if all fields are filled
    if (username && password) {
        // Display success message
        successMessage.textContent = 'Submitted successfully!';
        successMessage.style.color = 'green';
        successMessage.style.display = 'block';

        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        // Show error if fields are missing
        successMessage.textContent = 'Please fill in all the fields.';
        successMessage.style.color = 'red';
        successMessage.style.display = 'block';
    }
});

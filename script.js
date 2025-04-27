// Get DOM elements for the mobile menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle mobile menu when menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Form validation and submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Prevent default form submission
    e.preventDefault();
    
    // Get all form elements
    const fullName = document.getElementById('full_name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');
    
    // Clear any previous error messages
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    
    // Validate name field (must be at least 5 characters)
    if (fullName.value.length < 5) {
        formMessage.textContent = 'Name must be at least 5 characters long';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Validate phone number (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phone.value)) {
        formMessage.textContent = 'Phone number must be exactly 10 digits';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Validate email format using regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        formMessage.textContent = 'Please enter a valid email address';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Validate that subject and message are not empty
    if (!subject.value.trim() || !message.value.trim()) {
        formMessage.textContent = 'Subject and message cannot be empty';
        formMessage.className = 'form-message error';
        return;
    }
    
    // If all validations pass, prepare form data for submission
    const formData = new FormData(this);
    
    // Send form data to server using fetch API
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        if (data.status === 'success') {
            // Show success message and reset form
            formMessage.textContent = data.message;
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            // Show error message from server
            formMessage.textContent = data.message;
            formMessage.className = 'form-message error';
        }
    })
    .catch(error => {
        // Handle any network or server errors
        formMessage.textContent = 'An error occurred. Please try again.';
        formMessage.className = 'form-message error';
    });
});
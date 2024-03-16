function validateEmail(email) {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Updated validatePassword function
function validatePassword(password) {
    // Password validation rules
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    // Check if all validation rules are met
    if (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber) {
        return "The password should contain at least 8 characters with at least 1 numeral and 1 letter character.";
    }

    // Check password strength
    if (password.length >= 12 && hasUppercase && hasLowercase && hasNumber) {
        return "Strong password!";
    } else {
        return "Weak password!";
    }
}

function validateField(input) {
    const type = input.getAttribute('type');
    const value = input.value.trim();
    let validationMessage = '';

    if (type === 'country') {
        // No specific validation for the country dropdown
        return;
    }

    if (value === '') {
        validationMessage = 'This field cannot be empty.';
    } else if (type === 'email' && !validateEmail(value)) {
        validationMessage = 'Please enter a valid email address.';
    } else if (type === 'password') {
        validationMessage = validatePassword(value);
        
        // Check if it's a confirm password field
        if (input.id === 'confirmpassword') {
            const newPassword = document.getElementById('password').value.trim();
            if (newPassword !== value) {
                validationMessage = 'Passwords do not match.';
            } else {
                validationMessage = ''; // Passwords match, no error message
            }
        }
    } else if (type === 'tel' && !validateMobile(value)) {
        validationMessage = 'Please enter a valid 9-digit mobile number.';
    } else if (type === 'text' && value.length > 50) {
        validationMessage = 'Text should not exceed 50 characters.';
    }

    // If the input is focused but not typed, set the validation message
    if (document.activeElement === input && value === '') {
        validationMessage = 'This field cannot be empty.';
    }

    // If validatePassword returns an empty string, it means a valid password
    if (type === 'password' && (validationMessage === 'Strong password!' || validationMessage === 'Weak password!')) {
        input.classList.remove('invalid');
    } else if (validationMessage) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }

    input.setCustomValidity(validationMessage);
    input.reportValidity();
}


// Event listener for input fields
document.querySelectorAll('.input-style').forEach(input => {
    input.addEventListener('input', function () {
        validateField(this);
    });   
});

document.addEventListener('DOMContentLoaded', function () {
    const countryDropdown = document.getElementById('country');

    // Clear existing options
    countryDropdown.innerHTML = '';

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Populate the country dropdown options
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching country data:', error));
});









function registerUser() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const country = document.getElementById('country').value;
    const birthday = document.getElementById('birthday').value;
    const password = document.getElementById('password').value;

    // Retrieve existing users from Local Storage or initialize an empty array
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already taken
    if (savedUsers.some(user => user.email === email)) {
        alert('Email is already taken. Please choose a different one.');
        return;
    }


    // Add the new user to the array
    savedUsers.push({
        firstname,
        lastname,
        email,
        mobile,
        confirmpassword,
        country,
        birthday,
        password
    });

    // Save the updated users array to Local Storage
    localStorage.setItem('users', JSON.stringify(savedUsers));

    alert('User registered successfully!');
    // Redirect to the authorized section or home page
    window.location.href = 'authorization.html';
}


document.addEventListener('DOMContentLoaded', function () {
var picker = new Pikaday({
    field: document.getElementById('birthday'),
    format: 'MM/DD/YYYY', // You can adjust the date format
    yearRange: [1900, new Date().getFullYear()],
    showYearDropdown: true,
});
});





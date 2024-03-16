document.body.addEventListener("click", function() {
  if (!sessionStorage.getItem('isLoggedIn') && window.location.pathname !== "/authorization.html") {
      window.location.href = "register.html";
  }
});

function authorizeUser() {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const enteredEmail = document.getElementById('username').value; // Assuming 'username' is the email
    const enteredPassword = document.getElementById('password').value;
  
    const user = savedUsers.find(user => user.email === enteredEmail && user.password === enteredPassword);
  
    if (user) {
      alert('User authorized successfully!');
      sessionStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'index.html'; // Redirect on success
      return true;
    } else {
      alert('Invalid email or password. Please try again.');
      sessionStorage.setItem('isLoggedIn', 'false');
      return false;
    }
  }
  
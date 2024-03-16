function authorizeUser() {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const enteredEmail = document.getElementById('username').value; // Assuming 'username' is the email
    const enteredPassword = document.getElementById('password').value;
  
    const user = savedUsers.find(user => user.email === enteredEmail && user.password === enteredPassword);
  
    if (user) {
      alert('User authorized successfully!');
      window.location.href = 'index.html'; // Redirect on success
      return true;
    } else {
      alert('Invalid email or password. Please try again.');
      return false;
    }
  }
  
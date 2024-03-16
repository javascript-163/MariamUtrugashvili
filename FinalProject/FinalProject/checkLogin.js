document.body.addEventListener("click", function() {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = "register.html";
    }
});
  
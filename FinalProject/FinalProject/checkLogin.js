document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(event) {
        if (!sessionStorage.getItem('isLoggedIn')) {
            event.preventDefault();
            window.location.href = "register.html";
        }
    });
});
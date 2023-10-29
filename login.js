const loggedIn = document.getElementById("login-logged-in");
function login(event) {
    event.preventDefault();
    const brukernavn = document.getElementById("login-brukernavn");
    const passord = document.getElementById("login-passord");
    const error = document.getElementById("login-error");
    const login = localStorage.getItem("login");
    
    if (brukernavn.value + passord.value == login) {
        loggedIn.textContent = "Logged in user: " + brukernavn.value;
        error.style.display = "none";
    }
    else {
        error.style.display = "inline";
    }
}
const form = document.getElementById("login-form");
form.addEventListener("submit", login);

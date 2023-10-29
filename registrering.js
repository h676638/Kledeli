function register(event) {
    event.preventDefault();
    const brukernavn = document.getElementById("registrering-brukernavn");
    const passord = document.getElementById("registrering-passord");
    const bekreftPassord = document.getElementById("registrering-bekreft-passord");
    const error = document.getElementById("registrering-error");
    error.style.display = "none";
  
    if (passord.value != bekreftPassord.value) {
      error.style.display = "inline";
    }
    else {
        localStorage.setItem("login", brukernavn.value + passord.value);
    }
  }
  
  const form = document.getElementById("registrering-form");
  form.addEventListener("submit", register);
  
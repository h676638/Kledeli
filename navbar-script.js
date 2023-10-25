function myFunction() {
    let navbar = document.getElementById("myTopnav");
    let topnavSpace = document.getElementById("topnav-space");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
        topnavSpace.style.marginBottom = "145px";
    } 
    else {
        navbar.className = "topnav";
        topnavSpace.style.marginBottom = "0px";

    }
} 
const navbarIcon = document.getElementById("topnav-icon");
navbarIcon.addEventListener("click", myFunction);
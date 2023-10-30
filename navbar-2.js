
let x1 = "<div class=\"topnav\" id=\"myTopnav\">";
let x2 = "    <a class =\"topnav-logo\" href=\"../../index.html\" > &zwnj; </a>";
let x3 = "    <a class=\"topnav-not-logo\" href=\"../../plagg.html\">KLÆR</a>";
let x4 = "    <a class=\"topnav-not-logo\" href=\"../../medlemskap.html\">MEDLEMSKAP</a>";
let x5 = "    <a class=\"topnav-not-logo\" href=\"../../lokasjoner.html\">LOKASJONER</a>";
let x6 = "    <a class=\"topnav-not-logo\" href=\"../../omKledeli.html\">OM KLEDELI</a>";
let x7 = "    <a class=\"topnav-user\" href=\"../../logginn.html\">&zwnj;</a>";
let x8 = "    <a id=\"topnav-icon\"class=\"topnav-icon\">&#9776;</a>"
let x9 = "</div>";
let x10 = "<br>";
let x11 = "<div id=\"topnav-space\"> </div>";
const navbar = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11;
document.write(navbar);
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


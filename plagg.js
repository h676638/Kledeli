const tmpChildDivs = document.getElementsByClassName("plagg-kategorier");
const childDivs = Array.from(tmpChildDivs); 
childDivs.forEach((div) => {
    let details = div.querySelector("details");
    let children = details.querySelectorAll("a");
    console.log(children);
    details.addEventListener("toggle", () => {
        if (details.open) {
            let height = children.length * 34.4 + 250;
            div.style.height = height + "px";
        }
        else {
            div.style.height = "250px";
        }
        event.stopPropagation();
    })
    div.addEventListener("click", (event) => {
        details.toggleAttribute("open");
        event.preventDefault();
    })
});

let menuBtn = document.getElementsByClassName("ri-menu-line")[0];
let hideDiv = document.getElementById("menu-div")
let closeBtn = document.getElementsByClassName("ri-close-line")[0];


menuBtn.addEventListener("click",(e) => {
    hideDiv.style.display="flex";
})
closeBtn.addEventListener("click",() => {
    hideDiv.style.display="none";
})
//aca haremos la dinamica 
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");
let mode = "light";
let title = document.querySelector("h1");
let titleDos = document.querySelector(".h2");
let container =document.querySelector(".container");


function lightMode (){
    button.className = "switch";
    container.className = "container";
    circle.className = "circle";
    title.textContent = "light mode";
    titleDos.className = "h2";
}

function darkMode (){
    button.className = "darkButton";
    container.className = "darkContainer";
    circle.className = "darkCircle";
    title.textContent = "Dark Mode"
    titleDos.className = "darkH2";
}

circle.addEventListener("click",()=>{
    if(mode == "light"){
        darkMode();
        mode = "dark"
    }else{
        lightMode();
        mode = "light"
    }

})
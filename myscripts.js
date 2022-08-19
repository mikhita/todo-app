let iconSun = document.querySelector(".iconSun");
let iconMoon = document.querySelector(".iconMoon");

iconSun.addEventListener('click',function(event){
    iconSun.style.display = "none";
    iconMoon.classList.remove("iconDisplayNone");
    document.body.classList.add("dark");
});
iconMoon.addEventListener('click',function(event){
    iconSun.style.display = "block";
    iconMoon.classList.add("iconDisplayNone");
    document.body.classList.remove("dark");
});
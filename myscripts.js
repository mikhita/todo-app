let iconSun = document.querySelector(".iconSun");
let iconMoon = document.querySelector(".iconMoon");
let choiceTodos = document.querySelector(".choiceTodos");
let itemsLeftAndClear = document.querySelector(".itemsLeftAndClear");
let allOption = document.getElementById("all");
let actives = document.getElementById("actives");
let completed = document.getElementById("completed");

iconSun.addEventListener('click',function(event){
    iconSun.style.display = "none";
    iconMoon.classList.remove("iconDisplayNone");
    document.body.classList.add("dark");
    choiceTodos.style.background = "#25273D";
    choiceTodos.classList.add("boxShadowNone");
    itemsLeftAndClear.style.background = "#25273D";
    itemsLeftAndClear.classList.add("boxShadowNone");
    allOption.classList.add("backGroungGray");
    actives.classList.add("backGroungGray");
    completed.classList.add("backGroungGray");
   


});
iconMoon.addEventListener('click',function(event){
    iconSun.style.display = "block";
    iconMoon.classList.add("iconDisplayNone");
    document.body.classList.remove("dark");
    choiceTodos.style.background = "#FFFFFF";
    choiceTodos.classList.remove("boxShadowNone");
    itemsLeftAndClear.style.background = "#FFFFFF";
    itemsLeftAndClear.classList.remove("boxShadowNone");
    allOption.classList.remove("backGroungGray");
    actives.classList.remove("backGroungGray");
    completed.classList.remove("backGroungGray");

});


let todoList = [];
let inputValue = document.querySelector(".writeTodo");
let checkboxId = document.getElementById("checkboxId");
let text = document.getElementById("todo-input");



function addItem(event){
        event.preventDefault();
        let text = document.getElementById("todo-input");
        checkboxId.classList.toggle("checkboxRoundChecked")
        console.log(text.value);
        todoList.push(todo)
        text.value = "";

}

inputValue.onsubmit = (addItem)




// let form=document.querySelector("form");
// let text=document.getElementById("text");
// let todoCon=document.querySelector(".todo-con")
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     addtodo();
// })
// let todos=JSON.parse(localStorage.getItem("todos"));
// if(todos){
//     todos.forEach(element => {
//         addtodo(element)
//     });
// }
// function addtodo(elem) {
//     let todoColl=document.createElement("div");
//     todoColl.classList.add("todocoll")
//     let todotext=text.value;
//     if(elem){
//         todotext=elem.text;
//     }
//     if(todotext){
//     todoColl.innerHTML=`
//     <div class="todo-li">
//     <div class="check ${elem && elem.complete?"active-check":""}"><img src="./images/icon-check.svg" alt=""></div>
//     <p class="ptag ${elem && elem.complete?"complete":""}">${todotext}</p>
//     <button class="close"><img src="./images/icon-cross.svg" alt=""></button>
//   </div>
//   <div class="hr"></div>`;
//     todoCon.appendChild(todoColl);
//     updateLs()
//     }
//     let close=todoColl.querySelector(".close");
//     close.addEventListener("click", ()=>{
//         todoColl.remove();
//         updateLs();
//     })
//     let check=todoColl.querySelector(".check");
//     check.addEventListener('click', ()=>{
//         check.classList.toggle("active-check")
//         todoColl.children[0].children[1].classList.add("complete")  
//         updateLs()
//     })
//     text.value="";
// }

// function updateLs() {
//     let ptag=document.querySelectorAll(".ptag")
//     let arr=[];
//     ptag.forEach(element => {
//         arr.push({
//             text:element.innerText,
//             complete:element.classList.contains("complete")
//         })
//     });
//     localStorage.setItem("todos",JSON.stringify(arr));
// }
// let info=document.querySelectorAll(".choice p")
// let todoli=document.querySelectorAll(".todocoll")
// console.log(info);
// info.forEach(element => {
//    element.addEventListener("click", ()=>{
//     info.forEach(item => {
//         item.classList.remove("active");
//     });
//     element.classList.add("active")
//     if(element.innerText=="Active"){
//         todoli.forEach(elem => {
//             if(!elem.children[0].children[1].classList.contains("complete")){
//                 elem.style.display="block";
//             }else{
//                 elem.style.display="none";
//             }
//         });
//     }else if(element.innerText=="Completed"){
//         todoli.forEach(elem => {
//             if(elem.children[0].children[1].classList.contains("complete")){
//                 elem.style.display="block";
//             }else{
//                 elem.style.display="none";
//             }
//         });
//     }else{
//         todoli.forEach(elem => {
//             elem.style.display="block";
//         });
//     }
//    })
// });
// let clear=document.querySelector(".clear");
// clear.addEventListener("click", ()=>{
//     todoli.forEach(elem => {
//         if(elem.children[0].children[1].classList.contains("complete")){
//             elem.remove()
//             updateLs();
//         }
//     });
// })
// let left=document.querySelector(".left");
// function setitem() {
//     let activeTodo=document.querySelectorAll(".todo-li .active-check");
//     let diff=todoli.length-activeTodo.length;
//     left.innerText=`${diff} items left`
    
// }
// setitem();
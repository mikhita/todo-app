let iconSun = document.querySelector(".iconSun");
let iconMoon = document.querySelector(".iconMoon");
let choiceTodos = document.querySelector(".choiceTodos");
let itemsLeftAndClear = document.querySelector(".itemsLeftAndClear");
let allOption = document.getElementById("all");
let actives = document.getElementById("actives");
let completed = document.getElementById("completed");
let inputForAddings = document.getElementById("inputForAdding");
let itemsCounter = document.querySelector(".itemsCounter");
let imageCross = document.querySelector(".imageCross");
let insideDiv ;
let checkboxId = document.getElementById("checkboxId");
let todoInput = document.getElementById("todo-input");
let checkmark = document.querySelector(".checkmark");
let mainContent = document.querySelector(".mainContent");
let todoList = [];


allOption.addEventListener('click',function(event){
    allOption.classList.add("makeColorBlue");
    actives.classList.remove("makeColorBlue");
    completed.classList.remove("makeColorBlue");
})
actives.addEventListener('click',function(event){
    allOption.classList.remove("makeColorBlue");
    actives.classList.add("makeColorBlue");
    completed.classList.remove("makeColorBlue");
})
completed.addEventListener('click',function(event){
    allOption.classList.remove("makeColorBlue");
    actives.classList.remove("makeColorBlue");
    completed.classList.add("makeColorBlue");
})

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
    inputForAddings.classList.add("boxShadowNone");
    inputForAddings.style.background = "#25273D";
    checkboxId.style.background = "#25273D";
    todoInput.style.background = "#25273D";
    todoInput.style.color = "#C8CBE7";
    console.log(insideDiv);

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
    inputForAddings.classList.remove("boxShadowNone");
    inputForAddings.style.background = "#FFFFFF";
    checkboxId.style.background = "#FFFFFF";
    todoInput.style.background = "#FFFFFF";

});



checkboxId.addEventListener('click', function(event){
    checkboxId.classList.toggle("checkboxRoundChecked");
    checkmark.classList.toggle("makedisplayBlock");
    console.log(event.target.checked)
})

checkmark.addEventListener('click', function(event){
    checkboxId.classList.toggle("checkboxRoundChecked");
    checkmark.classList.remove("makedisplayBlock");
    console.log(event.target.parentElement.nextElementSibling?.checked)
})


function createTodo(obj){
    let inputForAdding = document.createElement("div");
    inputForAdding.classList.add("inputForAdding", "inputText");
    

    let hrline = document.createElement("hr");
    hrline.classList.add("hrline");
    
    let checkboxRound = document.createElement("input");
    checkboxRound.classList.add("checkbox-round", "checkboxRound");
    checkboxRound.type = "checkbox";
    checkboxRound.checked = obj.done;
    inputForAdding.append(checkboxRound);
    
    
    let span = document.createElement("span");
    span.classList.add("checkmark");
    inputForAdding.append(span);
    span.addEventListener('click', function(event){
        checkboxRound.classList.toggle("checkboxRoundChecked");
        span.classList.remove("makedisplayBlock");
        // console.log(event.target.nextElementSibling?.checked)
    })
    checkboxRound.addEventListener('click',function(event){
        checkboxRound.classList.toggle("checkboxRoundChecked");
        span.classList.toggle("makedisplayBlock");
        // console.log(event.target.checked);
    })
    let imageCheck = document.createElement("img");
    imageCheck.setAttribute("src", "./images/icon-check.svg")
    imageCheck.classList.add("checkImage");
    span.append(imageCheck);

    let pTag = document.createElement("p");
    pTag.classList.add("pTag");
    pTag.innerText = obj.target;
    inputForAdding.append(pTag);

    let imageCross = document.createElement("img");
    imageCross.setAttribute("src", "./images/icon-cross.svg")
    imageCross.classList.add("imageCross");
    inputForAdding.append(imageCross);

    let mainContentChild = document.createElement("div");
    mainContentChild.classList.add("mainContentChild");
    mainContent.append(mainContentChild);

    mainContentChild.append(hrline);
    mainContentChild.append(inputForAdding);
    insideDiv = inputForAdding;
}

todoInput.addEventListener('keypress', function(event){
    if(event.key === "Enter" && todoInput.value!==""){
        todoList.push({
            done:false,
            target:todoInput.value
        });
        createTodo({done:false,target:todoInput.value});
        // createTodo(todoList[todoList.length - 1]);
        // console.log(todoList);
        todoInput.value = "";
        // console.log(mainContent.childNodes.length-1)
        itemsCounter.innerHTML = mainContent.childNodes.length-1;

        // console.log(todoList) ;
    }
})



for(let i=0;i<todoList.length;i++){

}




// let obj = {
//     done:false,
//     target:'ბუთქემფის პროექტის დასრულება'
// };
// todoList.push(obj);
// let tolodistItem = `<div class="" >${obj.target}</div>`

// container.innerHTML += tolodistItem;
// render();
// function render() {
//     todoList.forEach((obj) => {
//         let tolodistItem = `<div class="" >${obj.target}</div>`
//         continer.innterHHTML += tolodistItem;
//     });
// }



// checkboxRounds.addEventListener('click', function(event){
//     checkboxId.classList.toggle("checkboxRoundChecked");
//     checkmark.classList.toggle("makedisplayBlock");
//     console.log(event.target.checked)
// })


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
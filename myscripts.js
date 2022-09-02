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
let boxes = [];
let iconsunClick;
let id=1;
let test = document.getElementById("test");



test.addEventListener('change',function(event){
    if(test.checked){
        document.querySelector(".testTest").style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
    } else{document.querySelector(".testTest").style.background = "transparent"}
})

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
    todoInput.style.background = "#25273D";
    todoInput.style.color = "#C8CBE7";
    mainContent.classList.add("boxShadowNone");
    iconsunClick = true;
    boxes.forEach(inputText => {
        inputText.style.backgroundColor = '#25273D';
        inputText.childNodes[0].style.background = "#25273D";
        inputText.childNodes[1].style.color = "#FFFFFF";
      })   
      
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
    todoInput.style.background = "#FFFFFF";
    todoInput.style.color = "#393A4B";
    mainContent.classList.remove("boxShadowNone");
    mainContent.classList.remove("boxShadowNone");
    iconsunClick = false;
    boxes.forEach(inputText => {
        inputText.style.backgroundColor = '#FFFFFF';
        inputText.childNodes[0].style.background = "#FFFFFF";
        inputText.childNodes[1].style.color = "#393A4B";
    })
    
});






function createTodo(obj){
    let inputForAdding = document.createElement("div");
    inputForAdding.classList.add("inputForAdding", "inputText");
    

    let hrline = document.createElement("hr");
    hrline.classList.add("hrline");

    let testTest = document.createElement("div");
    testTest.classList.add("testTest");
    
    
    let checkboxRound = document.createElement("input");
    checkboxRound.classList.add("checkboxRound");
    checkboxRound.type = "checkbox";
    checkboxRound.checked = obj.done;
    testTest.append(checkboxRound);
    inputForAdding.append(testTest);
    
    
    checkboxRound.addEventListener('click',function(event){

                pTag.classList.toggle("overRight");  
                obj.done = !obj.done; 
                if(obj.done){
                    testTest.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
                } else{testTest.style.background = "transparent"} 
    })

    

    let pTag = document.createElement("p");
    pTag.classList.add("pTag");
    pTag.innerText = obj.target;
    inputForAdding.append(pTag);
    if(obj.done){
        pTag.classList.add("overRight");
    }
    
    iconSun.addEventListener('click',function(event){
        pTag.classList.add("colorWhiteC")
    });
    iconMoon.addEventListener('click',function(event){
        pTag.classList.remove("colorWhiteC")
    });
    todoInput.addEventListener('keypress', function(event){
        if(event.key === "Enter" && todoInput.value!==""){
           if(iconsunClick === true){
            pTag.classList.add("colorWhiteC")
           }else if(iconsunClick === false){pTag.classList.remove("colorWhiteC")}
        }
    })
    let imageCross = document.createElement("img");
    imageCross.setAttribute("src", "./images/icon-cross.svg")
    imageCross.classList.add("imageCross");
    inputForAdding.append(imageCross);
    imageCross.addEventListener('click',function(event){
      let removeItem =   event.target.parentElement.parentElement;
        itemsCounter.innerHTML -=1;
     
       let removeId = +removeItem.getAttribute("id");
        removeItem.remove();
      let removeIndex =  todoList.findIndex((element) => element.id === removeId);
   

        todoList.splice(removeIndex,1)
       

    })

    let mainContentChild = document.createElement("div");
    mainContentChild.classList.add("mainContentChild");
    mainContent.append(mainContentChild);
    mainContentChild.id = obj.id; 

    mainContentChild.append(inputForAdding);
    mainContentChild.append(hrline);
    insideDiv = inputForAdding;
}

todoInput.addEventListener('keypress', function(event){
    if(event.key === "Enter" && todoInput.value!==""){
        
        todoList.push({
            id:id++,
            done:test.checked,
            target:todoInput.value
        });
        
        mainContent.innerHTML = "";
        
        todoList.forEach( (todo)=> {
            createTodo(todo);
        })
        
        todoInput.value = "";
        itemsCounter.innerHTML = mainContent.childNodes.length;
        boxes = document.querySelectorAll(".inputText");
        if(iconsunClick===true){
            boxes.forEach(inputText => {
                inputText.style.backgroundColor = '#25273D';
                inputText.childNodes[0].style.background = "#25273D";
                inputText.childNodes[1].style.color = "#FFFFFF";
              })   
             
        }else if(iconsunClick === false){boxes.forEach(inputText => {
            inputText.style.backgroundColor = '#FFFFFF';
            inputText.childNodes[0].style.background = "#FFFFFF";
            inputText.childNodes[1].style.color = "#393A4B";
        })}
        
        
        
    }
})






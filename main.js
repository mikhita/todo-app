let itemsCount = 0;
const itemsLeft = document.querySelector('.items-left');

// Changing Color Themes
let theme = "light";
const changeLightButton = document.querySelector('.change-light');
changeLightButton.addEventListener('click', () => {
    if(theme === 'light'){
        document.documentElement.style.setProperty('--veryLightGray', '#161722')
        document.documentElement.style.setProperty('--theme-image', 'url(../images/icon-sun.svg)')
        document.documentElement.style.setProperty('--bg-image', 'url(../images/bg-desktop-dark.jpg)')
        document.documentElement.style.setProperty('--veryLightGrayishBlue', '#25273c')
        document.documentElement.style.setProperty('--lightGrayishBlue', '#4D5067')
        document.documentElement.style.setProperty('--darkGrayishBlue', '#777a92')
        document.documentElement.style.setProperty('--veryDarkGrayishBlue', '#C8CBE7')
        document.documentElement.style.setProperty('--bgWhite', '#25273D')
        document.documentElement.style.setProperty('--boxShadow', 'rgba(0, 0, 0, 0.5)')
        theme = 'dark';
    }else{
        document.documentElement.style.setProperty('--veryLightGray', '#fafafa')
        document.documentElement.style.setProperty('--theme-image', 'url(../images/icon-moon.svg)')
        document.documentElement.style.setProperty('--bg-image', 'url(../images/bg-desktop-light.jpg)')
        document.documentElement.style.setProperty('--veryLightGrayishBlue', '#e4e5f1')
        document.documentElement.style.setProperty('--lightGrayishBlue', '#d2d3db')
        document.documentElement.style.setProperty('--darkGrayishBlue', '#9394a5')
        document.documentElement.style.setProperty('--veryDarkGrayishBlue', '#484b6a')
        document.documentElement.style.setProperty('--bgWhite', '#FFFFFF')
        document.documentElement.style.setProperty('--boxShadow', 'rgba(194, 195, 214, 0.5)')
        theme = 'light';
    }
})

// Adding active class to Check button
const checkButton = document.querySelector('.check')
checkButton.addEventListener('click', () => checkButton.classList.toggle('active'))

// Creating new todo input that can make todo task both completed and active
const newTodoInput = document.querySelector('#create-todo-input');
newTodoInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter' && newTodoInput.value.length > 0){
        completed = document.querySelector('.newTodoCheck').checked;
        let state =  Array.from(document.querySelectorAll('.change-todos-button')).filter(button => button.classList.contains('activeState'))
        makeNewTodo(newTodoInput.value, completed, state[0].classList[1]);
        newTodoInput.value = '';
        document.querySelector('.newTodoCheck').checked = false
        deleteButtonsFunction();
        appearAll();
        appearActive()
        appearCompleted();
        clearCompleted();
        activeParent();
        if(!completed){
            itemsCount++;
            itemsLeft.innerHTML = `${itemsCount} items left`;
        }
    }
})

// Make active parent element on input change

appearAll = () => {
    const todos = document.querySelectorAll('.todo-item');
    const allButton = document.querySelectorAll('.all');
    allButton.forEach(n => n.removeEventListener('click', appearAllListener))
    allButton.forEach(n => n.addEventListener('click', appearAllListener))
}

// Global function of making new todo task
makeNewTodo = (text, completed, state) => {
    const todoList = document.querySelector('.todos-list');
    let uid = (new Date().getTime()).toString(36);
    let inputId = (new Date().getTime()).toString(35);
    let todo = `
        <li id='${uid}' class="todo-item ${completed ? 'completed' : ''}" draggable="true" style="display:${state === 'all' ? 'flex' : state === 'active' && !completed ? 'flex' : completed && state === 'completed' ? 'flex' : 'none'}">
            <input id='${inputId}' class="check" type="checkbox" ${completed ? 'checked' : ''}>
            <label class="todo-item-text" for="${inputId}">${text}</label>
            <img class='delete-todo' src='./images/icon-cross.svg' alt='Delete Button'>
        </li>
    `
    if(text.length > 0){
        todoList.insertAdjacentHTML('afterbegin', todo);
    }
}

// Deleting todo task function Listener
deleteTodo = (deleteButton) => {
    deleteButton.parentElement.remove();
}

// Filter todos and appear all of them
appearAll = () => {
    const todos = document.querySelectorAll('.todo-item');
    const allButton = document.querySelectorAll('.all');
    allButton.forEach(n => n.removeEventListener('click', appearAllListener))
    allButton.forEach(n => n.addEventListener('click', appearAllListener))
}

// Filter todos and appear all of them
appearActive = () => {
    const todos = document.querySelectorAll('.todo-item');
    const activeButton = document.querySelectorAll('.change-todos-button.active');
    activeButton.forEach(n => n.removeEventListener('click', appearActiveListener))
    activeButton.forEach(n => n.addEventListener('click', appearActiveListener))
}

appearCompleted = () => {
    const todos = document.querySelectorAll('.todo-item');
    const activeButton = document.querySelectorAll('.change-todos-button.completed');
    activeButton.forEach(n => n.removeEventListener('click', appearCompletedListener))
    activeButton.forEach(n => n.addEventListener('click', appearCompletedListener))
}

clearCompleted = () => {
    const todos = document.querySelectorAll('.todo-item');
    const clearCompleted = document.querySelector('.clear-completed');
    clearCompleted.removeEventListener('click', clearCompletedListener);
    clearCompleted.addEventListener('click', clearCompletedListener);
}

const activeParent = () => {
    const buttons = document.querySelectorAll('.check')

    buttons.forEach(button => button.removeEventListener('change', activeParentListener));
    buttons.forEach(button => button.addEventListener('change', activeParentListener));
}

// Deleting todo task function
const deleteButtonsFunction = () => {
    const deleteButtons = document.querySelectorAll('.delete-todo')
    deleteButtons.forEach(deleteButton => deleteButton.removeEventListener('click', () => {
        deleteTodo(deleteButton)
    }))
    deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', () => {
        deleteTodo(deleteButton)
    }))
}

// Filter todos appear all function Listener
const appearAllListener = (event) => {
    const todos = document.querySelectorAll('.todo-item');
    Array.from(todos).map(todo => todo.style.display = 'flex');
    document.querySelectorAll('.change-todos-button').forEach(button => button.classList.remove('activeState'))
    document.querySelectorAll(`.${event?.target.classList[1]}`).forEach(button => button.classList.add('activeState'))
}

// Filter todos appear active function Listener
const appearActiveListener = (event) => {
    const todos = document.querySelectorAll('.todo-item');
    Array.from(todos).map(todo => {
        todo.classList.contains('completed') ? todo.style.display = 'none' : todo.style.display = 'flex'
        console.log('hi')
    });
    document.querySelectorAll('.change-todos-button').forEach(button => button.classList.remove('activeState'))
    document.querySelectorAll(`.${event?.target.classList[1]}`).forEach(button => button.classList.add('activeState'))

}

// Filter todos appear active function Listener
const appearCompletedListener = (event) => {
    const todos = document.querySelectorAll('.todo-item');
    Array.from(todos).map(todo => {
        todo.classList.contains('completed') ? todo.style.display = 'flex' : todo.style.display = 'none';
    });
    document.querySelectorAll('.change-todos-button').forEach(button => button.classList.remove('activeState'))
    document.querySelectorAll(`.${event?.target.classList[1]}`).forEach(button => button.classList.add('activeState'))
}

const clearCompletedListener = (event) => {
    const todos = document.querySelectorAll('.todo-item.completed');
    Array.from(todos).map(todo => {
        todo.remove();
    });
}

const activeParentListener = () => {
    const buttons = document.querySelectorAll('.check')
    Array.from(buttons).map(button => {
        if(button.checked){
            button.parentElement.classList.add('completed')
        }else {
            button.parentElement.classList.remove('completed')
        }
        // document.querySelectorAll('.change-todos-button').forEach(button => button.classList.remove('activeState'))
        
    })
}

appearActive();
appearAll();
appearCompleted();
deleteButtonsFunction();
clearCompleted();
activeParent();



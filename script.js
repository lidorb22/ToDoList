//selectors
const todoInput= document.querySelector('.tein');
const todoButton= document.querySelector('.subutt');
const todoList= document.querySelector('.todo-list');
const langEL= document.querySelector('.lang-warp');
const links= document.querySelectorAll('a');
const titleEl= document.querySelector('.title');
const descEL= document.querySelector('.description');
const boardEL = document.querySelector('.board-input');

var data ={
    "english":
    {
        "title": "Add",
        "description":
        "here you can write your tasks that you want to do and add them to the tasks board.",
        "boardin":
        "Tasks Board"
    },
    "hebrew":
    {
        "title": "הוסף",
        "description":
        "במקום הלבן ניתן לכתוב את המשימות שיש לכם לאחר מכן לחצו על הוסף.",
        "boardin":
        "!לוח משימות"
    }
}

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delteCehck);



//functions

links.forEach(el => {
    el.addEventListener('click', () => {
        langEL.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        titleEl.value = data[attr].title;
        descEL.textContent = data[attr].description;
        boardEL.textContent = data[attr].boardin;
    });
});

function addTodo(event){
    event.preventDefault();
    //create div
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo= document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //complete check butt
    const completedButton= document.createElement('button');
    completedButton.innerHTML= '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton= document.createElement('button');
    trashButton.innerHTML= '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";
}

function delteCehck(event){
    const item = event.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


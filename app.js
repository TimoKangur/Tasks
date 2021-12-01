// user input form
const form = document.querySelector('form')
form.addEventListener('submit', addTask)

// task list
const taskList = document.querySelector('ul')
taskList.addEventListener('click', delTask)

//del button-link
const deleteBtn = document.querySelector("#delete-tasks")
deleteBtn.addEventListener("click",delTasks)

function delTasks(){
    //taskList.innerHTML = ""
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    removeAllStorage()
}
//removeAllStorage
function removeAllStorage(){
    localStorage.removeItem("tasks")
}

//page reload
document.addEventListener("DOMContentLoaded", getTasks)

//get Tasks
function getTasks(){
    //get data from LS
    let tasks
    if(localStorage.getItem("tasks") == null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    //for each task
    tasks.forEach(function(taskFromLS){
        //create li and add to tasklist
        // create element to DOM
        const li = document.createElement('li')
        // add CSS class
        li.className = 'collection-item'
        // add text to element
        const text = document.createTextNode(taskFromLS)
        li.appendChild(text)
        // create link
        const link = document.createElement('a')
        // add css style
        link.className = 'secondary-content'
        // add text to link
        link.appendChild(document.createTextNode('X'))
        // add href attribute
        link.setAttribute('href', '#')
        // add link to li
        li.appendChild(link)
        // add li to taskList
        taskList.appendChild(li)
    })
}


// delTask
function delTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this task?')){
            event.target.parentElement.remove()
            let task = event.target.parentElement.textContent.slice(0, -1)
            removeStorage(task)
        }
    }
}
//removeStorage
function removeStorage(task){
    let tasks
    if(localStorage.getItem("tasks") == null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.forEach(function(taskFromLS,taskIndex){
        if(taskFromLS === task){
            tasks.splice(tasksIndex, 1)
        }
    })
    localStorage.setItem("tasks",JSON.stringify(tasks))

}

    // addTask function
    function addTask(event){
    // get task value from form input
    const task = document.querySelector('#task').value
    // get element from DOM
    const taskList = document.querySelector('ul')
    // create element to DOM
    const li = document.createElement('li')
    // add CSS class
    li.className = 'collection-item'
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // create link
    const link = document.createElement('a')
    // add css style
    link.className = 'secondary-content'
    // add text to link
    link.appendChild(document.createTextNode('X'))
    // add href attribute
    link.setAttribute('href', '#')
    // add link to li
    li.appendChild(link)
    // add li to taskList
    taskList.appendChild(li)
        //save task to localStorage
        taskStorage(task)
    // clear form input value
    document.querySelector('#task').value = ''
    event.preventDefault()
}

function taskStorage(task){
    let tasks
    if(localStorage.getItem("tasks") == null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))


    //const tasks = []
    //tasks.push(task)
    //console.log(tasks)
}
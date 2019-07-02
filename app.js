//Define variables 

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//create fn to loadd event listeners

// loadEventListeners(); created initalization error

//load all event listeners
const loadEventListeners = () => {
    //add task event
    form.addEventListener('submit', addTask)
}

//add task
const addTask = (event) => {
    event.preventDefault();

    if(taskInput.value === ''){
        alert('Please add a task')
    }
  
// create li element
    const li = document.createElement('li')
    //add class, need collection class item b/c of material ui
    li.className = 'collection-item'
    //create text node and append 
    li.appendChild(document.createTextNode(taskInput.value))
    //create new link element
    const link = document.createElement('a')
    //add class to a tag
    link.className = 'delete-item secondary-content'
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //append the link to li
    li.appendChild(link)
    //append li to ul 
    taskList.appendChild(li)
    //clear input
    taskInput.value = ''
}

loadEventListeners();
 console.log(taskInput)
 
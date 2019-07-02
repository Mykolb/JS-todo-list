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
    // remove task event
    taskList.addEventListener('click', removeTask)
    //clear task event
    clearBtn.addEventListener('click', clearTasks)
    //filter tasks
    filter.addEventListener('keyup', filterTasks)
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



//store task
const storeInLocalStorage = (task) => {
   let tasks;
    localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//store in local storage
storeInLocalStorage(taskInput.value)

//remove task working!
const removeTask = (event) => {
   //classList has access to remove, add and toggle method
    if(event.target.parentElement.classList.contains('delete-item')) {
        console.log(event.target) 
        if(confirm('Confirm: Are you sure you want to delete this item?')) {

        }
    }
    event.target.parentElement.parentElement.remove()
}

//clear fn
const clearTasks = () => {
    // taskList.innerHTML = '' one way to clear it 

    //faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

//filter tasks fn
const filterTasks = (event) => {
    const text = event.target.value.toLowerCase()
    console.log('keys pressed', text)

    document.querySelectorAll('.collection-item').forEach(task => { 
        const item = task.firstChild.textContent
        console.log('looking for item', item)
      return item.toLowerCase().indexOf(text) != -1 ? task.style.display = 'block' : task.style.display = 'none'
    })
}
    console.log(filterTasks)




loadEventListeners();
//  console.log(taskInput)
 
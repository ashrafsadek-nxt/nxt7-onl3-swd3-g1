// task class
class Task {
    constructor(name, description,dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
}
// UI class
class UI {
    static loadtasks(tasks){
        tasks.forEach(task => this.addtaskItem(task));
    }
    static addtaskItem(task){
        const taskList = document.querySelector('#task-list');
        const item = document.createElement('tr');
        const name = document.createElement('td');
        name.appendChild(document.createTextNode(task.name));
        item.appendChild(name);
        const description = document.createElement('td');
        description.appendChild(document.createTextNode(task.description));
        item.appendChild(description);
        const dueDate = document.createElement('td');
        dueDate.appendChild(document.createTextNode(task.dueDate));
        item.appendChild(dueDate);
        const removeBtn = document.createElement('button');
        removeBtn.appendChild(document.createTextNode('done'));
        removeBtn.classList.add('btn');
        removeBtn.classList.add('btn-success');
        removeBtn.classList.add('remove');
        item.appendChild(removeBtn);
        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode('edit'));
        editBtn.classList.add('btn');
        editBtn.classList.add('btn-warning');
        editBtn.classList.add('edit');
        item.appendChild(editBtn);
        taskList.appendChild(item);
    }

    static removetaskItem(event){
        if (event.target.classList.contains('remove')){
            event.target.parentNode.remove();
            let taskName = event.target.parentNode.children[0].innerText;
            console.log(taskName);
            Storage.removetask(taskName);
        }
    }

    static clearFields(){
        document.querySelector('#task-name').value = '';
        document.querySelector('#task-description').value = '';
        document.querySelector('#due-date').value = '';
    }

    static showMessage(msg,msgType,location){
        const warning = document.createElement('div');
        warning.className = `alert alert-${msgType} text-capitalize msg`;
        warning.appendChild(document.createTextNode(msg));
        document.querySelector('#add-task').insertBefore(warning,location.nextSibling);
    }

    static search(keyword) {
        let tasks = document.querySelectorAll('#task-list>tr');
        tasks.forEach(task => task.style.display = 'none');
        tasks.forEach(task => {
            if(task.children[0].innerText.indexOf(keyword)>-1){
                task.style.display = 'table-row';
            }
            if(task.children[1].innerText.indexOf(keyword)>-1){
                task.style.display = 'table-row';
            }
            if(task.children[2].innerText.indexOf(keyword)>-1){
                task.style.display = 'table-row';
            }
        });
    }

    static edittask(event){
        if (event.target.classList.contains('edit')){
            document.querySelector('#task-name').value = event.target.parentNode.children[0].innerText;
            document.querySelector('#task-description').value = event.target.parentNode.children[1].innerText;
            document.querySelector('#due-date').value = event.target.parentNode.children[2].innerText;
            document.querySelector('#due-date').setAttribute('disabled','disabled');
            document.querySelector('#add').value = 'update';
            document.querySelector('#add-task').firstElementChild.innerText = 'update task';
        }
    }

    static clearList(){
        Array.from(document.querySelector('#task-list').children).forEach(item=>item.remove());
    }
}

// storage class
class Storage {
    static gettasks(){
        let tasks = [];
        if(localStorage.getItem('tasks')){
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static addtask(task){
        let tasks = this.gettasks();
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    static edittask(newtask,dueDate){
        let tasks = this.gettasks();
        tasks = tasks.map(task => {
            if(task.dueDate === dueDate){
                task.name = newtask.name;
                task.description = newtask.description;
            }
            return task;
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    static removetask(name){
        let tasks = this.gettasks();
        tasks.forEach((task,index)=>{
            if (task.name === name){
                tasks.splice(index,1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static isRegistered(name){
        let found = false;
        Storage.gettasks().forEach(task=> {
            if (task.name === name){
               found = true;
            }
        });
        return found;
    }
}
// events
document.addEventListener('DOMContentLoaded', UI.loadtasks(Storage.gettasks()));

document.querySelector('#task-list').addEventListener('click', UI.removetaskItem);
document.querySelector('#task-list').addEventListener('click', UI.edittask);

document.querySelector('#add-task').addEventListener('click', (event)=> {
    event.preventDefault();
    if(event.target.id !== 'add'){
        return;
    }
    const name = document.querySelector('#task-name');
    const description = document.querySelector('#task-description');
    const dueDate = document.querySelector('#due-date');
    document.querySelectorAll('.msg').forEach(msg => msg.remove());

    if(!name.value.trim()) {
        UI.showMessage('please enter the task name','danger',name.parentNode);
        return;
    } else if(Storage.isRegistered(name.value.trim()) && event.target.value === 'add'){
        UI.showMessage('task name must be unique','danger',name.parentNode);
        return;
    }
    if(!description.value.trim()) {
        UI.showMessage('please enter the task description','danger',description.parentNode);
        return;
    }
    if(!dueDate.value.trim() || Date.parse(dueDate.value.trim()) < Date.now()) {
        UI.showMessage('due date is mandatory and must be a future date','danger',dueDate.parentNode);
        return;
    } else if(event.target.value === 'update'){
        const task = new Task(name.value.trim(),description.value.trim(),dueDate.value.trim());
        Storage.edittask(task, task.dueDate);
        UI.clearList();
        document.querySelector('#due-date').removeAttribute('disabled');
        document.querySelector('#add').value = 'add';
        document.querySelector('#add-task').firstElementChild.innerText = 'add task';
        UI.loadtasks(Storage.gettasks());
        UI.showMessage('task updated successfully','success',dueDate.parentNode);
        setTimeout(()=>document.querySelectorAll('.msg').forEach(msg => msg.remove()),3000);
        UI.clearFields();
        return;
    }
    const task = new Task(name.value.trim(),description.value.trim(),dueDate.value.trim());
    Storage.addtask(task);
    UI.addtaskItem(task);
    UI.showMessage('task added successfully','success',dueDate.parentNode);
    setTimeout(()=>document.querySelectorAll('.msg').forEach(msg => msg.remove()),3000);
    UI.clearFields();
});

document.querySelector('#search').addEventListener('input',(event)=>UI.search(event.target.value.trim()))
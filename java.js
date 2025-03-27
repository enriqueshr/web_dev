let tasks = [];

document.getElementById('addTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const dueDate = document.getElementById('dueDate').value;
    const description = document.getElementById('taskDescription').value;

    const task = { title, dueDate, description };
    tasks.push(task);
    updateTaskList();
    $('#addTaskModal').modal('hide');
    this.reset();
});

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item task-item';
        listItem.innerHTML = `
            <div>
                <h5>${task.title}</h5>
                <small>Due: ${task.dueDate}</small>
                <p>${task.description}</p>
            </div>
            <div>
                <button class="btn btn-warning" onclick="editTask(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('editTaskTitle').value = task.title;
    document.getElementById('editDueDate').value = task.dueDate;
    document.getElementById('editTaskDescription').value = task.description;
    document.getElementById('editTaskIndex').value = index;
    $('#editTaskModal').modal('show');
}

document.getElementById('editTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const index = document.getElementById('editTaskIndex').value;
    tasks[index].title = document.getElementById('editTaskTitle').value;
    tasks[index].dueDate = document.getElementById('editDueDate').value;
    tasks[index].description = document.getElementById('editTaskDescription').value;
    updateTaskList();
    $('#editTaskModal').modal('hide');
});

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}
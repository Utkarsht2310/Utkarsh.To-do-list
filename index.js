function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '' && dateInput.value !== '') {
        const listItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        listItem.appendChild(taskText);

        const dueDate = document.createElement('span');
        dueDate.classList.add('due-date');
        const taskDate = new Date(dateInput.value);
        const today = new Date();
        
        if (taskDate < today) {
            dueDate.classList.add('past');
        }
        
        dueDate.textContent = `Due: ${taskDate.toDateString()}`;
        listItem.appendChild(dueDate);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => taskList.removeChild(listItem);

        listItem.appendChild(removeButton);
        listItem.onclick = () => listItem.classList.toggle('completed');

        taskList.appendChild(listItem);

        taskInput.value = '';
        dateInput.value = '';
    } else {
        alert("Please enter both a task and a due date.");
    }
}


function showDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
}

showDateTime();
setInterval(showDateTime, 1000); 

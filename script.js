document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskItem.textContent = taskText;

            const editButton = document.createElement('button')
            editButton.textContent = 'Edit'
            editButton.addEventListener('click', function() {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = taskSpan.textContent;
                taskItem.replaceChild(editInput, taskSpan);

                const saveButton = document.createElement('button')
                saveButton.textContent = 'Complete';
                saveButton.addEventListener('click', function() {
                    const newTaskText = editInput.value.trim();
                    if (newTaskText !== '') {
                        taskSpan.textContent = newTaskText;
                        taskItem.replaceChild(taskSpan, editInput);
                        taskItem.replaceChild(editButton, saveButton);
                    }
                });

                taskItem.replaceChild(saveButton, editButton)
            });
            
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(taskSpan);
            taskItem.appendChild(editButton);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            
            newTaskInput.value = '';

        }
    })
})
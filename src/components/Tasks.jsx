import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, taskClick,taskEdit, taskDeletion }) => {
    return (
        <>
            {tasks.map(task =>
                <Task
                    key={ task.id }
                    task={ task }
                    taskClick={taskClick}
                    taskEdit={taskEdit}
                    taskDeletion={ taskDeletion } />)}
        </>
    )
}

export default Tasks;
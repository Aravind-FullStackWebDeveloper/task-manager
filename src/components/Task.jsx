import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faEdit } from "@fortawesome/free-regular-svg-icons";
import '../css/Task.css';
import { CgTrash } from 'react-icons/cg';

const Task = ({ task, taskClick, taskDeletion, taskEdit }) => {
    const navigate =useNavigate();

    const handleTaskDetailClick = () => {
        navigate(`/${task.title}`);
    }

    const handleTaskEditClick = () => {
        taskEdit(task.id);
    }

    return (
        <div className="task-container">
            <div className="task-status"
                style={ task.completed ? linearGradient : {} }
                onClick={ () => taskClick(task.id) }>
                { task.completed ?
                    <FontAwesomeIcon
                        style={{ color: '#EAEFBD' }}
                        icon={faThumbsUp} /> :
                    <FontAwesomeIcon
                        style={{ color: '#dbdbdb' }}
                        icon={faThumbsDown} /> }
            </div>
            <div className="task-content" onClick={handleTaskDetailClick}>
                <p>{task.title}</p>
            </div>
            <div className="task-button-container">
                <button className="edit-task-button" onClick={()=>handleTaskEditClick}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="remove-task-button"
                    onClick={() => taskDeletion(task.id)}><CgTrash />
                </button>
            </div>
        </div>
    );
}

const linearGradient = {
    background: 'linear-gradient(90deg, rgba(26,117,27,1) 0%, rgba(84,140,47,1) 100%)'
}

export default Task;
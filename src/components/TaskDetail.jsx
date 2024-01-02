import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from './Button';

import '../css/TaskDetail.css';

const TaskDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("/");
    }

    return (
        <>
            <div className="task-detail-container">
                <h2>{params.taskTitle}</h2>
                <p>This is the Task decription</p>
            </div>
            <div className="back-button-container">
                <Button isRadius={true} onClick={handleBackButtonClick}>Back</Button>
            </div>
        </>
    );
}
 
export default TaskDetail;
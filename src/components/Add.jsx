import React, { useState } from 'react';

import Button from './Button';

import '../css/Add.css'

const Add = ({ taskAddition }) => {
    const [data, setData] = useState('');

    const handleInput = event => {
        setData(event.target.value);
    }

    const handleAddTask = () => {
        taskAddition(data);
        setData('');
    }

    return (
        <div className="add-container">
            <input
                className="add-input"
                onChange={handleInput}
                value={data}
                type="text"
                placeholder="Task Name" />
            <div className="add-button-container">
                <Button onClick={handleAddTask}>Add Task</Button>
            </div>
        </div>
    );
}
 
export default Add;
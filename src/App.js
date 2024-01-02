import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Add from "./components/Add";
import Tasks from "./components/Tasks";
import TaskDetail from "./components/TaskDetail";

import "./css/App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task Name",
      completed: false,
    },
    {
      id: 2,
      title: "Task",
      completed: true,
    },
  ]);

  useEffect(() => {
    fetchAsync();
  }, []);

  const fetchAsync = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.cypress.io/todos?_limit=10"
    );
    setTasks(data);
  };

  const handleTaskClick = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id)
        return {
          ...task,
          completed: !task.completed,
        };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleTaskUpdate = (id, newTitle) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id)
        return {
          ...task,
          title: newTitle,
        };
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <Add taskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  taskClick={handleTaskClick}
                  taskDeletion={handleTaskDeletion}
                  taskUpdate={handleTaskUpdate}
                />
              </>
            }
          />
          <Route path='/:taskTitle' exact element={<TaskDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

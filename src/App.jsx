import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

import './global.css';

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTaskAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addNewTask(taskTitle) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function taksCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // verifica o id
        return {
          ...task,
          isCompleted: !task.isCompleted, // inverte o valor de isCompleted
        };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }

  function deleteTask(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTaskAndSave(newTasks);
  }

  return (
    <div>
      <Header onAddNewTask={addNewTask} />
      <main>
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCompletedTaks={taksCompleted}
        />
      </main>
    </div>
  );
}

export default App;

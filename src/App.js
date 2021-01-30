import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { FaTrashAlt } from 'react-icons/fa';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, [tasks]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'Delete',
    });

    // const newListTasks = tasks.filter((task) => task.id !== id);
    // setTasks(newListTasks);
  };

  //Toggle reminder

  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id);

    const updatedTask = { ...taskToggle, reminder: !taskToggle.reminder };
    console.log(updatedTask);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    // const data = await res.json();
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: data.reminder } : task
    //   )
    // );

    // setTasks(
    //   tasks.map((task) =>
    //     // task.id === id ? { ...task, reminder: !task.reminder } : task
    //     {
    //       if (task.id === id) return { ...task, reminder: !task.reminder };
    //       else return task;
    //     }
    //   )
    // );
  };

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    // const id = Math.floor(Math.random() * 10000) + 1;

    // setTasks([...tasks, { ...task, id: id }]);
  };

  const toggleAddTask = () => {
    setShowAddTask((prev) => !prev);
  };

  return (
    <>
      <div className='container'>
        <Header toggleAddTask={toggleAddTask} showAddTask={showAddTask} />

        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'No Tasks to show'
        )}
      </div>
    </>
  );
}

export default App;

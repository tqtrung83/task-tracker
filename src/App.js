import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { FaTrashAlt } from 'react-icons/fa';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    const newListTasks = tasks.filter((task) => task.id !== id);

    setTasks(newListTasks);
  };

  //Toggle reminder

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        // task.id === id ? { ...task, reminder: !task.reminder } : task
        {
          if (task.id === id) return { ...task, reminder: !task.reminder };
          else return task;
        }
      )
    );
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div className='container'>
        <Header />

        <AddTask />
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

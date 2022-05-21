import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Jan 13th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Jan 14th at 11:00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Hospital visit',
        day: 'Jan 17th at 3:30pm',
        reminder: false,
    }
])


//Add Task
const addTask = (task) => { 
  const id = Math.floor(Math.random() *
  10000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => 
  task.id !== id ))
}

//Toggle Reminder
const toggleReminder = (id) => {
setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task
   ))
}

  return (
    <div className="container">

      <Header /> 
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle= {toggleReminder}/>
      ) : ('No Tasks To Show'
      )} 
      

    </div>
    //other possibility: //(<Header title='Hello'/>)
  );
}


export default App;

const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 8:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Gym',
        day: 'Feb 8th at 12:30pm',
        reminder: true,
    }
]

const Tasks = () => {
  return (
    <>
       {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))} 
    </>
  )
}

export default Tasks
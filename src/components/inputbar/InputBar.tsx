import Logo from "../../assets/Logo.png"
import "./InputBar.scss"
import { FaPlus } from "react-icons/fa";
import Tasklist from "../tasklist/tasklist";
import "../tasklist/tasklist.scss"
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import clipboard from '../../assets/Clipboard.png'
 


function InputBar() {

  const [tasks, setTasks] = useState([])

  const [newTasks, setNewTasks] = useState('')

  const [newTaskText, setNewTaskText] = useState('')

  const [countTasksCompleted, setcountTasksCompleted] = useState(0)

  const [isCompletedTask, setIsCompletedTask] = useState(false)

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
}

  function handleCreateNewTask(e: React.FormEvent<HTMLInputElement>){
    e.preventDefault();
    setTasks([...tasks, {id:uuidv4(), title: newTaskText, isCompleted: false}])
    setNewTaskText("");
  }

  function deleteTask(id: string){
    const Filtered = tasks.filter(tasks => {
        return tasks.id !== id;
    })
    setTasks(Filtered);
  }

  function isCompletedTheTask(value: any){
    let FilteredIsCompleted = tasks.filter(task => {
      if(task.id === value){
        return ({...tasks, isCompleted: !task.isCompleted})
      }
      return task
    })
    setTasks(FilteredIsCompleted)
    console.log(FilteredIsCompleted)
  }

  return (
  <>
    <form onSubmit={handleCreateNewTask}>
      <div className="InputContainer">
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={newTaskText}
            onChange={handleNewTaskChange} 
            required  />
          <button type="submit">Criar <FaPlus/></button>
      </div>
    </form>
    <div className='tasklist01'>
        <div className="taskcontainer01">
            <div className="headerlist01">
                <p>Tarefas Criadas <span> {tasks.length} </span></p>
                <p>Concluídas <span> {tasks.length === 0 ? 0 : <span> 0 de {tasks.length} </span>}</span> </p> 
            </div>
        </div>
    </div>
    {tasks.length === 0 ? <div className='tasklist'>
        <div className="taskcontainer">
            <div className="todolistoff">
                <img src={clipboard} alt="" />
                <p className='p1'>Você ainda não tem tarefas cadastradas</p>
                <p className='p2'>Crie Tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    </div> : tasks.map(item => {
      return <Tasklist key={item.id} item={item} deleteTask={deleteTask} setIsCompletedTask={setIsCompletedTask} isCompletedTheTask={isCompletedTheTask} isCompletedTask={isCompletedTask}/>
    })}
  </>
  )
}

export default InputBar

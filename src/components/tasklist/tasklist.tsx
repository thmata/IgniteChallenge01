import React from 'react';
import "./tasklist.scss"
import clipboard from '../../assets/Clipboard.png'
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';

interface TaskListProps {
  item: {
    title: string
    id: string
    isCompleted: boolean
  }
  deleteTask: Function
  setIsCompletedTask: Function
  isCompletedTheTask: Function
  isCompletedTask: Function
}

const Tasklist = ({item, deleteTask, setIsCompletedTask, isCompletedTheTask, isCompletedTask}: TaskListProps) => {


const [isChecked, setIsChecked] = useState(item.isCompleted)

function handleDeleteTask(){
  deleteTask(item.id)
}

function handleClickIsComplete(){
  // isCompletedTheTask(item.id)
}

  
  return(
    <div className='tasklist'>
        <div className="taskcontainer">
            <ul className="todoliston">
              <li className='docontainer'>
                <label className="container">
                  <input onChange={e => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                  <p style={isChecked ?  {textDecoration: "line-through", color: "#808080" }: null }>{item.title}</p>
                  <button onClick={handleDeleteTask}><FaTrashAlt size={15}/></button>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default Tasklist;

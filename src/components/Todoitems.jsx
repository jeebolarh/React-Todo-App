import tick from "./tick.png"
import not from './not_tick.png'
import cross from './cross.png'
import { useState } from "react"
const Todoitems = ({ no, h, text, setTodo }) => {
  const [isChecked, setChecked] = useState(false)
  const toggleClicked = () => {
    setChecked(!isChecked)
  }
const removeTask = ()=> {
  setTodo((prevTodos) => prevTodos.filter((todo) => todo.no !== no)); // Use props.no for comparison
  console.log({ no }); // Log the correct ID
};
  return (
    <div className="todoitems">
      <div className={`todo-items-container`}  onClick={toggleClicked} >
        {!isChecked?<img src={not} alt="" />:<img src={tick} alt="" />}
       <div className="todo-list-item">{text} </div>
      </div>
      <img src={cross } alt="" onClick={removeTask}/>
   </div>
  )
}

export default Todoitems

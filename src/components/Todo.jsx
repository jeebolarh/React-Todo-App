import { useEffect} from "react"
import { useState } from "react"
import Todoitems from "./Todoitems"
const Todo = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue]= useState("")
  const add = () => {
    const newTodo = { no: Date.now() + Math.random(), text: inputValue, display: "" };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  useEffect(() => {
    console.log(todos) 
  }, [todos])
  return (
    <div className="todo">
      <div className="todo-header"> Todo-list <div />
        <div className="todo-add">
          <input value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
            }} className="todo-text" type="text" placeholder="Add New Task" />
            <div onClick={() => {inputValue.length>3 ? add():alert("Please add more words") } } className="Add">Add</div>
        </div>
          <div className="list">
          {todos.map((items, index) => {
            return <Todoitems key={index} no={items.no} display={items.display} text={items.text} setTodo={setTodos} />
          })}
          </div>
      </div>
    </div>
  )
}

  export default Todo

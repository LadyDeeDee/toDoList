import {useState} from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function ToDoList(){
    const [todos, setTodos] = useState ([])
    const[count, setCount] = useState(todos.length);

    function increment(){
      setCount(prevState=>prevState+1)
    }

    function decrement(){
      setCount(prevState=>prevState-1)
    }
    const addTask = (userInput) => {
        if(userInput) {
          const newItem = {
            id: Math.random().toString(36).substring(2,9),
            task: userInput,
            complete: false
          }
          setTodos([...todos, newItem])
        }
        increment()
    }
    const removeTask = (id) => {
      setTodos([...todos.filter((todo)=>todo.id !== id)])
       decrement() 
    }

    const handleToggle = (id) => {
      setTodos([
        ...todos.map((todo)=>
        todo.id === id? {...todo, complete: !todo.complete}:{...todo}
        )
      ])
        
    }

    return  (
        <div className = "toDoList">
          <header>
            <h1>ToDo List: {count} </h1>
            <ToDoForm addTask={addTask} />
            {todos.map((todo)=>{
                return (
                    <ToDo
                    todo={todo}
                    key={todo.id} 
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
            }
            )}

          </header>
        </div>
    );
}
export default ToDoList;
import { useState } from "react"

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) =>{
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) =>{
         e.preventDefault()
         addTask(userInput)
         setUserInput("")
    }

    const handleKeyPress = (e) =>{
        if(e.key === "Enter"){
            handleSubmit(e)
        }

    }
    return (
        <form onSubmit = {handleSubmit}>
            <input
                value={userInput}//значение в виде состояния userInput
                type="text"// тип
                onChange={handleChange} //обрабоотчик
                onKeyDown={handleKeyPress} //обрабоотчик
                placeholder="Mettez la valeur..."//для красоты
            />
            <button>Enregistrer</button>
        </form>
    )
}

export default ToDoForm
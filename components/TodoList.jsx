import React, {useState} from "react"

export default function TodoList(){

const [tasks, setTasks] = useState([])
const  [newTasks, setNewTasks] = useState("")

function handleInputChange(event){
    setNewTasks(event.target.value);
}

function addTask(){

}
function deleteTask(index){
    setTasks(tasks.filter((element, i) => i !==index))
}
function moveTaskUp(index){

}
function moveTaskDown(index){

}

    return(
        <div className="">
            <h1>Liste des tâches</h1>
            <div>
                <input 
                type="text"
                value={newTasks}
                onChange={handleInputChange}
                placeholder="Entrer une nouvelle tâche..."
                />

                <button
                className=""
                onClick={addTask}>
                    Ajouter
                </button>
            </div>

        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="">{task}</span>
                <button className=""
                    onClick={() => deleteTask(index)}
                    >Delete</button>

                <button className=""
                    onClick={() => moveTaskUp(index)}
                    >⬆</button>
                    
                <button className=""
                    onClick={() => moveTaskDown(index)}
                    >⬇</button>
            </li>
            )}
        </ol>

        </div>
    );
}
import React, {useState} from "react"

export default function TodoList(){

const [tasks, setTasks] = useState(["Faire du sport", "Se reposer pour guerir", "reviser ses leçons"])
const  [newTasks, setNewTasks] = useState("")

function handleInputChange(event){
    setNewTasks(event.target.value);
}

function addTask(){
    if (newTasks.trim()!==""){
        setTasks(t => [...t, newTasks])
        setNewTasks("")
    }
}
function deleteTask(index){
    setTasks(tasks.filter((element, i) => i !==index));
}
function moveTaskUp(index){
    if (index>0) {
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]]
        setTasks(updateTasks)
    }
}
function moveTaskDown(index){
    if (index < tasks.length - 1) {
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]]
        setTasks(updateTasks)
    }
}

    return(
        <div className="text-center">
            <h1 className="text-6xl text-bold my-3">Liste des tâches</h1>
            <div >
                <input 
                type="text"
                className=""
                value={newTasks}
                onChange={handleInputChange}
                placeholder="Entrer une nouvelle tâche..."
                />

                <button
                className="bg-green-500 hover:bg-green-400"
                onClick={addTask}>
                    Ajouter
                </button>
            </div>

        <ol className="list-decimal">
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="">{task}</span>
                <button className="bg-red-500 hover:bg-red-600"
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
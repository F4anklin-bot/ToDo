import React, {useState} from "react"

export default function TodoList(){

const [tasks, setTasks] = useState([])
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
        <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-6xl text-bold mb-3">Liste des tâches</h1>
            <div className="h-[50px] flex border-1 border-violet-200 rounded-xl overflow-auto">
                <input 
                type="text"
                className="m-3"
                value={newTasks}
                onChange={handleInputChange}
                placeholder="Entrer une nouvelle tâche..."
                />

                <button
                className="bg-green-500 p-1.5 hover:bg-green-400"
                onClick={addTask}>
                    Ajouter
                </button>
            </div>

        <ol className="list-decimal">
            {tasks.map((task, index) => 
            <li key={index} className="transition bg-black text-white duration-500 ease-in m-2 border-1 flex p-2 min-w-[300px] border-white rounded-xl items-center">
                <span className="">{task}</span>
                <div className="ml-auto mr-0 right-0">
                <button className="bg-red-500 hover:bg-red-600 rounded-xl p-1 mx-1"
                    onClick={() => deleteTask(index)}
                    >Delete</button>

                <button className="mx-1 bg-blue-400 hover:bg-blue-500"
                    onClick={() => moveTaskUp(index)}
                    >⬆</button>
                    
                <button className="mx-1 bg-blue-400 hover:bg-blue-500"
                    onClick={() => moveTaskDown(index)}
                    >⬇</button>
                </div>
            </li>
            )}
        </ol>

        </div>
    );
}
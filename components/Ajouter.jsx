import { useState } from "react"

export default function Ajouter(){
    const [count,setCount] = useState(0) 
    const handleAjouter = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <div>
            <button className="bg-green-400 rounded-3xl py-2 px-4" onClick={handleAjouter}>Ajouter</button>
            <p>Vous avez cliqué {count} fois</p>
        </div>
    )
}
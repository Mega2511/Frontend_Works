import { useState } from "react"

function Counter(){

    const [name,setName]=useState("Megzz");

    const handleChange = () => {
        setName("Megii");
    }

    return(
        <>

        <h1> {name}</h1>

        <button onClick={handleChange}>Change Name</button>

        </>
    )
}



export default Counter
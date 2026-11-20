import { useState } from "react"

export default function DetailsForm() {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isshow, setishow] = useState(false)
    const handlename = (e) => {
        //console.log(e.target.value);
        setname(e.target.value)
    }
    const handleage = (e) => {
        //console.log(e.target.value)
        setage(e.target.value)
    }
    return (
        <div>
            <lable>Name:</lable>
            <input placeholder="Enter" onChange={handlename} />
            <br />
            <label>Age:</label>
            <input placeholder="Enter" onChange={handleage} />
            <br />
            <button onClick={()=> setishow(true)}> Save</button>
            <br /> 
            <br />
            { isshow ? 
                <div>
                    <h1>Name:{name}</h1>
                    <h1>Age:{age}</h1>
           
                </div>
                :null }
        </div>
    )

}
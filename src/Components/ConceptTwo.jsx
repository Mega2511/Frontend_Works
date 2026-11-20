import React, {useEffect} from 'react'


export default function ConceptTwo(){
    const [count,setcount]=useState(0)



    useEffect(()=>{
        console.log("mounting 1");
        

    },[])

    const handleadd= ()=>{
        setcount(count+1)
    }


    return(
        <div>
           
            <h1>Concept</h1>
            <button onClick={handleadd}>Add</button>


        </div>
    )
}
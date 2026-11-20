import  {useEffect, useState} from 'react';


export default function CardOne(){
    const [apidata, setapidata]=useState([])


    const handleapi=async ()=>{
        let res = await fetch("https://dummyjson.com/products");
        let b = await res.json()
        console.log(b)
        setapidata(b.products);

    }

    useEffect(()=>{
        handleapi()

    },[])

    
    return(
        <div>
        

           {/* <button onClick={handleapi}>Call Api</button>*/}
            {apidata.map((obj) => (
                <div key={obj.id}>
                    <h1>{obj.title}</h1>
                </div>

            
            ))}
            </div>
            );
        }
            

        
            
            






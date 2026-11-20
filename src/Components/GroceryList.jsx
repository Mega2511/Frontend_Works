import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
export function GroceryList() {

    const [apidata, setapidata]=useState([])
    const [item, setitem]=useState("")
    const handlefetch = async () => {
        let res = await axios.get("http://localhost:3000/groceryList/") 
        console.log(res.data);
       setapidata(res.data);

    }

    useEffect(() => {
        handlefetch();
    }, []);


    const handleadd = async () => {
        console.log(item);


        let data ={
        item:item
    }
    let res = await axios.post("http://localhost:3000/groceryList/",data)
    console.log(res);
    handlefetch();
    }
    const handledelete = async (del_id) => {
        console.log("Delete ID:",del_id);
        let res = await axios.delete("http://localhost:3000/groceryList/",del_id)
        handlefetch();
    }
    const handleEdit = async (data) => {
        console.log(data);
        let upItem = prompt("Enter your updated item",data.item || data.task);
        if(upItem === null || upItem.trim() === ""){
            return;
        }
        let body={
            item: upItem,
            id: data.id
        };
        let res = await axios.put("http://localhost:3000/groceryList/"+data.id,body)
        handlefetch();
    }

    
    return (
        <div>
            <h1>Grocery List</h1>
            <input onChange={(e)=> setitem(e.target.value)} placeholder="Enter" className="ms-3" />

            <button onClick={handleadd} className='btn btn-primary ms-3'>Add</button>


            <ol>
                {apidata.map((data) => (
                    <div key={data.id}>
                        <h3>{data.item || data.task}</h3>
                        <button onClick={() => handleEdit(data)}><FaEdit/></button>
                         <button onClick={() => handledelete(data.id)}><MdDelete/></button>
                    </div>
                ))}
            </ol>


            <ol>
                <li>Tomato 1kg</li>
                <span className="ms-4 ar"> <FaEdit /></span>

                <span className="ms-4 ar"><MdDelete /></span>

                {/* <li>Onion 1kg</li>
                <button>edit</button>
                <button>delete</button>*/}





            </ol>
            



        </div>
    )
}
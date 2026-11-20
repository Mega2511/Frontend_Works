import About from "./Components/About"
import Contact from "./Components/Contact"
import Counter from "./Components/Counter"
import ListShow from "./Components/ListShow"
import LuffyComp from "./Components/LuffyComp"
import CardOne from "./Components/CardOne";
import "./App.css"
import ConceptTwo from "./Components/ConceptTwo"
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import HomeComp from "./Components/Homecomp"
import ProductComp from "./Components/ProductComp"
import CheckComp from"./Components/CheckComp"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import DetailsForm from "./Components/DetailsForm"
import { GroceryList } from "./Components/GroceryList"

 

function App() {
 // const [list, setlist] = useState([])

  //const [isshow, setishow] = useState(true)

  // const handlelogout = () => {
    // setishow(false);

  
  return (
   <BrowserRouter>
      <h1></h1>

      {/* <Contact/>
         <About/>
        <Contact/>*/}

      {/*<Counter/> */}
      {/*<ListShow/>*/}
      {/*<LuffyComp name="Zoro" age={20}/>
 <LuffyComp name="Sanji" age={28}/>*/}
      {/* <CardOne />*/}
      {/* <ConceptTwo/>*/}
      {/*{isshow ? <ConceptTwo/> : null}
      <button onClick={handlelogout}>Logout</button>*/}
     {/* <link>Home</link>
      <br/>
      <link>Product</link>
      <br/>
      <link>About</link>
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomeComp />} />
          <Route path="/product" element={<ProductComp />} />
        </Routes>*/}
   {/* <CheckComp/>*/}
   {/*<DetailsForm/>*/}
   <GroceryList/>

   </BrowserRouter>


  );

}


export default App
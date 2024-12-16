import React from "react";

import {Route, Routes, BrowserRouter} from "react-router-dom"
import AddRecord from "./pages/addRecord";

export default function App(){

  return <>

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AddRecord/>}/>
      </Routes>
    
    
    </BrowserRouter>
  

  
  
  </>
}
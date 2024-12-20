import React from "react";

import {Route, Routes, BrowserRouter} from "react-router-dom"
import AddRecord from "./pages/addRecord";
import Login from "./pages/Login";

export default function App(){

  return <>

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<AddRecord/>}/>
      </Routes>
    
    
    </BrowserRouter>
  

  
  
  </>
}
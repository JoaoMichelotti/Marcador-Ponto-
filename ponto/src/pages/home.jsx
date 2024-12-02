import React from "react";
import Navigation from "../components/Navigation";
import InsertDates from "../components/InsertDates";
import ShowResults from "../components/ShowResults";
import { useState } from "react";
export default function Home(){
    
    const [dados, setDados] = useState([]); // Estado compartilhado

    const receberDados = (entrada, saida, data) => {
        setDados((prevDados) => [...prevDados, { entrada, saida, data }]);
    };


    return <>
        <Navigation>
            <a href="/">Home</a>
        </Navigation>
        <div style={{display: "flex", gap: "10px"}}>
            <InsertDates onEnviar={receberDados}/>
            {console.log(dados)}
            {dados.length > 0 && <ShowResults dados={dados}/>}
        </div>  
       

        
       
    </>
}
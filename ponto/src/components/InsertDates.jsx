import styled from "styled-components";
import { useState } from "react";
const Modelo = styled.div`
    background-color: #f5f7fa;
    display: flex;
    flex-flow: row wrap;
    flex-direction: column; 
    gap: 10px;
    padding: 10px 20px;
    max-width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    justify-content: center;
    

    input[type=submit] {
        width: 100%;
    }
`

export default function InsertDates(props){

    const [entrada, setEntrada] = useState("");
    const [saida, setSaida] = useState("");
    const [data, setData] = useState("");

    function DefinirEntrada(evento){

        let value = evento.target.value
        setEntrada(value)
    }

    function DefinirSaida(evento){

        let value = evento.target.value
        setSaida(value)
        
    }

    function DefinirData(evento){

        let value = evento.target.value
        setData(value)
        
    }

    function EnviarDados(evento){
        evento.preventDefault()

        props.onEnviar(entrada, saida, data)
        setEntrada("")
        setSaida("")
        setData("")
    }
    

    return <>
        
            <form onSubmit={EnviarDados}>
                <Modelo>
                    <label htmlFor="entrada">Horário de entrada:</label>
                    <input type="time" id="entrada" 
                    value={entrada} required
                    onChange={DefinirEntrada}/>
            
                
                    <label htmlFor="saida">Horário de saída:</label>
                    <input type="time" id="saida" 
                    value={saida} required
                    onChange={DefinirSaida}/>

                    <label htmlFor="data">Data:</label>
                    <input type="date" id="data" 
                    value={data} required
                    onChange={DefinirData}/>

                    <input type="submit" />
                </Modelo>
            </form>

       
    </>

}
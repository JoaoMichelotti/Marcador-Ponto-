import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    padding: 32px;    
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    max-width: 650px;
    min-width: 650px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
`

    const StlTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 18px;
    border-radius: 10px;
    overflow: hidden;


    thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
        font-weight: bold;
        
    }

    thead th {
        padding: 10px;
        text-align:center;
    }

    tbody td {
        text-align: center;
    }

`


export default function Tabela(props){

    return<>
        <Modelo>
            <StlTable>
                <thead>
                    <tr>
                        <th>Horário de entrada</th>
                        <th>Horário de saída</th>
                        <th>Data</th>
                        <th>Tempo Gasto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </StlTable>
            {props.pagination}
        </Modelo>
    
    </>


}




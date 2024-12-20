import React from "react";
import styled from "styled-components";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdfzando from "./Pdfzando";

const Modelo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 32px;    
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin-top: 20px;
    max-width: 650px;
    min-width: 650px;
    margin-left: auto;
    background-color: #fff;
`

const TotalTime = styled.div`
    border-radius: 20px;
    background-color: #009879;
    color: #fff;
    padding: 12px;
    font-size: 20px;
    min-width: 120px;
    text-align: center;

`

const PdfButton = styled.button`
    padding: 12px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    background-color: #009879;
    color: #fff;
    width: 120px;
    text-align: center;
`

export default function Utilitarios(props){
    return <Modelo>
        <TotalTime>
            <label>Total: </label>
            {props.total}

        </TotalTime>
        <PDFDownloadLink 
                        document={<Pdfzando tabelinha={props.infos} />} 
                        fileName="tabela-registros.pdf"
                        style={{backgroundColor: "#009879", 
                            padding: "12px", 
                            textDecoration: "none",
                            color: "white",
                            borderRadius: "20px",
                            fontSize: "20px",
                            textAlign: "center",
                            width: "120px",
                            marginBottom: "auto",
                            marginTop: "auto"
                        }}
                    >
                        {({ loading }) => loading ? 'Gerando PDF...' : 'Baixar PDF'}
        </PDFDownloadLink>
    </Modelo>


}
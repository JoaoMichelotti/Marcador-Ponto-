import React from "react";
import styled from "styled-components";


const Botao = styled.button`
    &:not(:last-child) {
    margin-right: 5px; /* Remove margem da direita do último botão */
  }
`

const ModeloImagem = styled.img`
   height: 16px;
   width: 16px; 
`


export default function Buttons(props) {

    return <Botao>
        <ModeloImagem src={props.imagem} alt={props.info} onClick={props.onClick} />
    </Botao>


}
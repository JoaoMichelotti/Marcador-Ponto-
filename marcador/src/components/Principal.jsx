import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    gap: 20px;
`

export default function Principal(props){

    return <>
        <Modelo>
            {props.children}
        </Modelo>
    
    
    
    </>
}
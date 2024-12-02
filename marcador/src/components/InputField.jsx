import React from "react";
import styled from "styled-components"


const Modelo = styled.div`
    padding: 32px;    
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`

const Formulario = styled.form`

    display: flex;
    flex-direction: column;
    gap: 16px;
`

export default function InputField(props){


    return <>
        <Modelo>
            <Formulario onSubmit={ props.onEnviar }>
                    {props.children}
            </Formulario>
        </Modelo>
    
    </>
}
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    background-color: #f5f7fa;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 200px;

    a {
        color: #007bff;
        font-size: 20px;
        text-decoration: none;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 4px;
        transition: color 0.3s ease, background-color 0.3s ease;

        &:hover {
            color: #ffffff;
            background-color: #0056b3;
            text-decoration: none;
        }
    }
`;

const Titulo = styled.div`
    font-size: 45px;
    text-align: center;
    color: #333;
    padding: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
`;

export default function Navigation(props) {
    return (
        <>   
            <Titulo>Marcador de Ponto</Titulo>
            <Modelo>{props.children}</Modelo>
        </>
    );
}
    
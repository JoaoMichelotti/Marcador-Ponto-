    import styled from "styled-components";
    import TimeCalculator from "./TimeConverter";

    const Modelo = styled.div`
        background-color: #f5f7fa;
        padding: 10px 20px;
        max-width: 500px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

        table {
                width: 100%;
                border-collapse: collapse;
            }
            table, th, td {
                border: 1px solid black;
            }
            th, td {
                padding: 8px;
                text-align: left;
            }   
            button:not(:last-child) {
                margin-right: 8px;
            }
    `
const ActionButton = (props) => (
        <button onClick={props.onClick}>
            <img src={props.imgSrc} alt={props.altText} />
        </button>
);

export default function ShowResults(props){

        return <>
                {console.log(props.dados)}
                <Modelo>  
                <table>
                    <thead>
                        <tr>
                        <th>Data</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                        <th>Tempo Gasto</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.dados.map((item, index) => {
                            return <tr key={index}>
                                    <td>{new Date(item.data).toLocaleDateString('pt-BR')}</td>
                                    <td>{item.entrada}</td>
                                    <td>{item.saida}</td>
                                    <td>{<TimeCalculator entrada={item.entrada} saida={item.saida} total={false}/>}</td>
                                    <td>
                                        <ActionButton
                                            onClick={() => console.log(`Editando item ${index}`)}
                                            imgSrc="./public/pencil.png"
                                            altText="Editar"
                                        />
                                        <ActionButton
                                            onClick={() => console.log(`Removendo item ${index}`)}
                                            imgSrc="./public/remove.png"
                                            altText="Remover"
                                        />
                                        <ActionButton
                                            onClick={() => console.log(`Salvando item ${index}`)}
                                            imgSrc="./public/diskette.png"
                                            altText="Salvar"
                                        />
                                    </td>
                                </tr>

                               
                            
                        })}
                    </tbody>
                </table>

                <div style={{paddingTop: "10px" }}>
                Total: <TimeCalculator entrada={props.dados} saida="" total={true}/>
                </div>
                

                </Modelo>
        </>

}
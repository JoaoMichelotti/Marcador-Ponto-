import React, {useState} from "react";
import InputField from "../components/InputField";
import ConteudoInicial from "../datas/ConteudoInicial";
import Tabela from "../components/DashBoard";
import Principal from "../components/Principal";

export default function AddRecord(){

    const [conteudo, setConteudo] = useState(ConteudoInicial)
    const [tabelinha, setTabelinha] = useState([])

    function Mudar(evento) {
        const campo = evento.target.name 
        const valor = evento.target.value 
        setConteudo({ ...conteudo, [campo]: valor })
    }

    function Enviar(evento) {
        evento.preventDefault();

        console.log(conteudo)

        setTabelinha([...tabelinha, conteudo])
        console.log(tabelinha)
        setConteudo(ConteudoInicial)

    }

    return<>
        <Principal>
            <InputField onEnviar={Enviar}>
                    <label htmlFor="entrada">Horário de entrada:</label>
                        <input type="time" id="entrada" name="hEntrada" 
                        value={conteudo.hEntrada} required
                        onChange={Mudar}/>
                
                    <label htmlFor="saida">Horário de saída:</label>
                        <input type="time" id="saida" name="hSaida"
                        value={conteudo.hSaida} required
                        onChange={Mudar}/>

                    <label htmlFor="data">Data:</label>
                        <input type="date" id="data" name="data"
                        value={conteudo.data} required
                        onChange={Mudar}/>

                    <input type="submit" value="Enviar"/>
            </InputField>  

            <Tabela>
                {tabelinha.length > 0 && tabelinha.map((item, index) => {
                    return <tr key={index}>
                            <td>{item.hEntrada}</td>
                            <td>{item.hSaida}</td>
                            <td>{item.data}</td>
                        </tr>
                      
                })}
            </Tabela>

        </Principal>
           
    </>


}
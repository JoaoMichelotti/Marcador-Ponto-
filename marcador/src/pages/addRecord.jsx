import React, {useState, useEffect} from "react";
import InputField from "../components/InputField";
import ConteudoInicial from "../datas/ConteudoInicial";
import Tabela from "../components/DashBoard";
import Principal from "../components/Principal";
import TimeConvert from "../functions/TimeConverter";
import Buttons from "../components/Buttons";
import Pagination from "../components/Pagination";
import Utilitarios from "../components/Utilitarios";
export default function AddRecord(){

    const [conteudo, setConteudo] = useState(ConteudoInicial)
    const [tabelinha, setTabelinha] = useState([])
    const [itemIndex, setItemIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPages] = useState(6)
    const [Slice, setSlice] = useState([])

    const lastPostIndex = currentPage * itemPerPages
    const firstPostIndex = lastPostIndex - itemPerPages
    
    
    useEffect(() => {

        const itemsSlice = tabelinha.slice(firstPostIndex, lastPostIndex)
        setSlice(itemsSlice)

    }, [tabelinha, currentPage])

    function Mudar(evento) {
        const campo = evento.target.name 
        const valor = evento.target.value 
        setConteudo({ ...conteudo, [campo]: valor })
    }

    function Enviar(evento) {
        evento.preventDefault();

        console.log(conteudo)

        if (itemIndex != null) {
            const atualizado = [...tabelinha]
            atualizado[itemIndex] = conteudo
            setTabelinha(atualizado)
            setItemIndex(null)
        }
        else {
            setTabelinha([...tabelinha, conteudo])
            console.log(tabelinha)
            
        }
        setConteudo(ConteudoInicial)
    }

    function Editar(index) {

        if (itemIndex === null) {
            setItemIndex(index);
            setConteudo(tabelinha[index])
        }
        else {
            setConteudo(ConteudoInicial)
            setItemIndex(null)
        }
    }

    function Remover(index){
        console.log("aiiiii ")
        const atualizado = tabelinha.filter((_, i) => i !== index);
        setTabelinha(atualizado);
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

            <Tabela  pagination={<Pagination 
                    totalPosts={tabelinha.length}
                    postsPerPage={itemPerPages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}>  
                    </Pagination>}>
                {tabelinha.length > 0 && Slice.map((item, index) => {
                    const [ano, mes, dia] = item.data.split('-');
                    const dataLocal = new Date(ano, mes - 1, dia); // Meses em JavaScript começam do 0
                    return <tr key={index}>
                            <td>{item.hEntrada}</td>
                            <td>{item.hSaida}</td>
                            <td>{dataLocal.toLocaleDateString('pt-BR')}</td>
                            <td>{TimeConvert(item, "Individual")}</td>
                            <td><Buttons imagem="./public/editar-texto.png" info="editar" onClick={() => Editar(index)}/>
                            <Buttons imagem="./public/remover.png" info="remover" onClick={() => Remover(index)}/>
                                </td>
                        </tr>
                      
                })}
            </Tabela>
        </Principal>
        {tabelinha.length > 0 && 
        <Utilitarios total={TimeConvert(tabelinha, "Total")} infos={tabelinha}/>
        }
        

        
    </>


}
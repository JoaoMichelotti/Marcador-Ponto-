import React, { useState} from "react";
import InputField from "../components/InputField";
import loginInicial from "../datas/LoginInicial";
import { checkEmail } from "../functions/ServerRiquisitions";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [pessoa, setpessoa] = useState(loginInicial)
    const navigate = useNavigate();

    function Mudar(evento) {

        const campo = evento.target.name
        const valor = evento.target.value

        setpessoa({...pessoa, [campo]: valor})

    }

    function Enviar(evento){

        evento.preventDefault()

        checkEmail(pessoa)
                        .then((res) => {
                        if (res.status === 200) {
                            const token = res.data.token;
                            const id = res.data.user;
                            localStorage.setItem("userToken", token);
                            localStorage.setItem("userID", id);
                            navigate('/dashboard'); // Redireciona para o dashboard
                        }
                        })
                        .catch((error) => {
                        if (error.response && error.response.status === 404) {
                            // E-mail não encontrado
                            alert("Usuário não encontrado. Verifique o e-mail e tente novamente.");
                        } else {
                            // Erro do servidor ou outra falha
                            alert("Erro no servidor. Tente novamente mais tarde.");
                            console.error("Erro no servidor:", error);
                        }
                        });
    
        setpessoa(loginInicial); // Reseta o estado do formulário

    }

    return<>

    <InputField onEnviar={Enviar}>
                    <label htmlFor="email" style={{textAlign: "center"}}>Email:</label>
                        <input type="email" id="email" name="email" 
                        placeholder="@email.com"
                        value={pessoa.email} required
                        onChange={Mudar}/>
            
                    <input type="submit" value="Acessar"/>
                    
            </InputField>
            {pessoa.email}
            </> 
            
}
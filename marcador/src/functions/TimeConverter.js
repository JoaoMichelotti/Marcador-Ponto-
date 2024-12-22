export default function TimeConvert(props, execucao){
    if (execucao == "Individual") {
        if (props.hSaida) {

            const [horasE, minutosE] = props.hEntrada.split(":").map(Number)
            const [horasS, minutosS] = props.hSaida.split(":").map(Number)

            const minutostotalE = horasE * 60 + minutosE
            const minutostotalS = horasS * 60 + minutosS

            const diferenca = minutostotalS - minutostotalE

            const horas = Math.floor(diferenca / 60);
            const minutos = diferenca % 60

            return `${horas}h ${minutos}m`;
        }
        else {
            return "Indefinido"
        }
    }
    else {
        if (props.length > 0){
            let total = 0
            for (let i = 0; i < props.length; i++) {
                
                const [horasE, minutosE] = props[i].hEntrada.split(":").map(Number)
                const [horasS, minutosS] = props[i].hSaida.split(":").map(Number)
                
                const minutostotalE = horasE * 60 + minutosE
                const minutostotalS = horasS * 60 + minutosS

                const diferenca = minutostotalS - minutostotalE

                total += diferenca
                
            }

            const horas = Math.floor(total / 60);
            const minutos = total % 60

            return `${horas}h ${minutos}m`;

        }
    }
        
}
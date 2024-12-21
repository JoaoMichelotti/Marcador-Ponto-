export default function TimeConvert(props, execucao){
    if (execucao == "Individual") {
        if (props.hsaida) {

            const [horasE, minutosE] = props.hentrada.split(":").map(Number)
            const [horasS, minutosS] = props.hsaida.split(":").map(Number)

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
                
                const [horasE, minutosE] = props[i].hentrada.split(":").map(Number)
                const [horasS, minutosS] = props[i].hsaida.split(":").map(Number)
                
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
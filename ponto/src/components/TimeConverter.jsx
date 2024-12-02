export default function TimeCalculator(props) {
    // Função para converter um horário (HH:mm) para minutos
    const converterParaMinutos = (horario) => {
        const [horas, minutos] = horario.split(":").map(Number); // Divide a string em horas e minutos
        return horas * 60 + minutos; // Converte tudo para minutos
    };

    // Calcular a diferença em minutos
    const calcularDiferenca = (entrada, saida) => {
        const minutosEntrada = converterParaMinutos(entrada);
        const minutosSaida = converterParaMinutos(saida);

        // Verificar se a saída é maior ou igual à entrada
        if (minutosSaida < minutosEntrada) {
            return "Erro: saída antes da entrada";
        }

        const diferencaMinutos = minutosSaida - minutosEntrada;
        const horas = Math.floor(diferencaMinutos / 60);
        const minutos = diferencaMinutos % 60;

        // Retornar no formato "Xh Ym"
        return `${horas}h ${minutos}m`;
    };

    const calcularTotal = () => {
        if (!Array.isArray(props.entrada)) return "Erro: entrada deve ser um array";

        let totalMinutos = 0;

        props.entrada.forEach((item) => {
            const minutosEntrada = converterParaMinutos(item.entrada);
            const minutosSaida = converterParaMinutos(item.saida);
            totalMinutos += minutosSaida - minutosEntrada;
        });

        const horas = Math.floor(totalMinutos / 60);
        const minutos = totalMinutos % 60;

        return `${horas}h ${minutos}m`;
    };

    return <>{!props.total ? calcularDiferenca(props.entrada, props.saida) : calcularTotal()}</>;
}

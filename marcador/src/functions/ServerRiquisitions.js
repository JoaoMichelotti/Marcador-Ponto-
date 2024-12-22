import axios from "axios"

async function checkEmail(pessoa) {

    return axios({
        method: "POST",
        url: "https://marcador-ponto-backend.vercel.app/getuseremail",
        data: {
            email: pessoa.email
        }
    })
}

async function createLog(log) {
    return axios({
        method: "POST",
        url: "https://marcador-ponto-backend.vercel.app/createrecord",
        data: {
            hentrada: log.hEntrada,
            hsaida: log.hSaida,
            datahoje: log.data,
            id_user: log.id_user
        }
    })
}

async function getAllLogs(id_user) {
    return axios({
        method: "POST",
        url: "https://marcador-ponto-backend.vercel.app/getallrecordsforauser",
        data: {
            id_user: id_user
        }
    })
}

async function updateLog(log) {
    return axios({
        method: "POST",
        url: "https://marcador-ponto-backend.vercel.app/updaterecord",
        data: {
            hentrada: log.hEntrada,
            hsaida: log.hSaida,
            datahoje: log.data,
            id_user: log.id_user
        }
    })
}

async function deleteLog(log) {
    return axios({
        method: "POST",
        url: "https://marcador-ponto-backend.vercel.app/deleterecord",
        data: {
            id: log.id
        }
    })
}


export {checkEmail, createLog, getAllLogs, updateLog, deleteLog}
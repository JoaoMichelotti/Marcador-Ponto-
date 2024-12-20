import axios from "axios"

async function checkEmail(pessoa) {

    return axios({
        method: "POST",
        url: "http://localhost:5000/getuseremail",
        data: {
            email: pessoa.email
        }
    })
}

async function createLog(log) {
    return axios({
        method: "POST",
        url: "http://localhost:5000/createrecord",
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
        url: "http://localhost:5000/getallrecordsforauser",
        data: {
            id_user: id_user
        }
    })
}


export {checkEmail, createLog, getAllLogs}
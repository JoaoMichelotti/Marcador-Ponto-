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
            hentrada: log.hentrada,
            hsaida: log.hsaida,
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

async function updateLog(log) {
    return axios({
        method: "POST",
        url: "http://localhost:5000/updaterecord",
        data: {
            hentrada: log.hentrada,
            hsaida: log.hsaida,
            datahoje: log.data,
            id_user: log.id_user
        }
    })
}

async function deleteLog(log) {
    return axios({
        method: "POST",
        url: "http://localhost:5000/deleterecord",
        data: {
            id: log.id
        }
    })
}


export {checkEmail, createLog, getAllLogs, updateLog, deleteLog}
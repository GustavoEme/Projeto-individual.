var dashboardModel = require("../models/dashboardModel");



function listar(res) {
    dashboardModel.listar().then(resultado => {
        res.json(resultado)
    })

}

module.exports = {
    listar
}
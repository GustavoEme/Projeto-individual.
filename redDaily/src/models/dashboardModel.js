var database = require("../database/config")


function listar() {
    var instrucao = `
        select pontuacao from Pontuacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};
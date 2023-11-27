var database = require("../database/config");

function cadastrar(pontuacao, Ranking) {
    var instrucao = `
        INSERT INTO Pontuacao (pontuacao) VALUES ('${pontuacao}');
        INSERT INTO Ranking (Ranking) VALUES ('${Ranking}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};
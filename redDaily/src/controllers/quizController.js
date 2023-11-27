var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var Ranking =  req.body.RankingServer;
    

    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuacao está undefined!");
    }

    quizModel.cadastrar(pontuacao).then(function(resposta){
        res.status(200).send("pontuacao criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}


var express = require("express");
var router = express.Router();

var DashboardController = require("../controllers/dashboardController");


router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    DashboardController.listar(res);
});





module.exports = router;
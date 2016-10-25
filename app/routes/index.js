var express = require('express');
var HomeController = require('../controller/home_controller');
var UsuariosController = require('../controller/usuarios_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/usuario', HomeController.usuario);
router.get('/usuarios.json', UsuariosController.todos);

module.exports = router;

var Usuario = require('../models/usuario');	

var HomeController = {
	index: function(request, response, next) {
 	  response.render('index', { title: 'Express' });
	},
	usuario: function(request, response, next) {
	  var usuario = new Usuario();
	  usuario.nome = "Edlaine";
	  usuario.email = "di@di";
	  usuario.senha= "12A3";
	  usuario.login = "dy";
	  usuario.salvar();
	  console.log(usuario);
 	  response.send('Olá usuario');
	}
};

module.exports = HomeController;
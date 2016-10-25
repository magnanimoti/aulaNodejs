var Usuario = require('../models/usuario');	

var UsuariosController = {
	todos: function(request, response, next) {
	Usuario.todos(function(retorno){
		if(retorno.error){
			response.status(500).send({
				error: 'erro ao buscar usuario (' + retorno.message + ')'
			});
		}else{
			response.status(200).send(retorno.usuarios);
		}

	});
	}
};

module.exports = UsuariosController;
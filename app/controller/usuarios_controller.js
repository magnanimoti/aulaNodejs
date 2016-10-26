var Usuario = require('../models/usuario');	

var UsuariosController = {
	todos: function(request, response, next) {
		if(request.query.nome !== undefined){
			Usuario.buscarPorNome(request.query.nome, function(retorno){
				if(retorno.error){
					response.status(500).send({
						error: 'erro ao buscar usuario por nome (' + request.query.nome + ') - (' + retorno.message + ')'
					});
				}else{
					response.status(200).send(retorno.usuarios);
				}

			});
		}else{
			Usuario.todos(function(retorno){
				if(retorno.error){
					response.status(500).send({
						error: 'erro ao buscar usuarios (' + retorno.message + ')'
					});
				}else{
					response.status(200).send(retorno.usuarios);
				}

			});	
		}	
	},
	porId: function(request,response, next){
		Usuario.buscarPorId(request.params.id, function(retorno){
			if(retorno.error){
				response.status(500).send({
					error: 'erro ao buscar usuario por id (' + retorno.message + ')'
				});
			}else{
				response.status(200).send(retorno.usuario);
			}
		});
	}
};

module.exports = UsuariosController;
var db = require('../../config/db');

var Usuario = function(){
	this.id = 0;
	this.nome = "";
	this.login = "";
	this.senha = "";
	this.email = "";
	this.salvar = function(){
		if(this.id === 0 | this.id === "" | this.id === undefined){
			if(this.nome ===""){
				console.log("[Modelo:Usuario] Nome obrigatório");
				return;
			}
			if(this.login ===""){
				console.log("[Modelo:Usuario] Login obrigatório");
				return;
			}
			if(this.senha ===""){
				console.log("[Modelo:Usuario] Senha obrigatório");
				return;
			}
			var query = "INSERT INTO manage_home.usuarios (nome, senha, email, login) VALUES ('" + this.nome + "','" + this.senha + "', '" + this.email + "', '" + this.login + "');";
			db.cnn.exec(query, function (rows, err) {
				if(err !== undefined){
					console.log("ERRO ao inserir dados de usuario");
				}else{
					console.log("SUCESSO ao inserir dados de usuario");
				}
				// body...
			});

		}else{
			// TODO: atualizar na base de dados
		}
	};
};

module.exports = Usuario;
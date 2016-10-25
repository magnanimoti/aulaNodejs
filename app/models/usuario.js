var db = require('../../config/db');

var Usuario = function(){
	var query ="";
	this.id = 0;
	this.nome = "";
	this.login = "";
	this.senha = "";
	this.email = "";
	this.salvar = function(){
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
		if(this.id === 0 | this.id === "" | this.id === undefined){
			
			query = "INSERT INTO usuarios (nome, senha, email, login) VALUES ('" + this.nome + "','" + this.senha + "', '" + this.email + "', '" + this.login + "');";
			db.cnn.exec(query, function (rows, err) {
				console.log("-------------");
				console.log(err);
				console.log("-------------");
				if(err != undefined){
					console.log("ERRO ao [inserir] dados de usuario");
				}else{
					console.log("SUCESSO ao [inserir] dados de usuario");
				}
				// body...
			});

		}else{
			query = "UPDATE usuarios SET nome='" + this.nome + "', senha='" + this.senha + "', email='" + this.email + "', login='" + this.login + "' WHERE id='" + this.id + "';";
			db.cnn.exec(query, function (rows, err) {
				console.log("-------------");
				console.log(err);
				console.log("-------------");
				if(err != undefined){
					console.log("ERRO ao [atualizar] dados de usuario");
				}else{
					console.log("SUCESSO ao [atualizar] dados de usuario");
				}
				// body...
			});
		}
	};
};

module.exports = Usuario;
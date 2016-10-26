var request = require('request');

describe("Controle de usuarios", function(){
	describe(" GET /usuarios.json retornar [todos]", function(){
		it("returns status code 200",function(done){
			request.get("http://localhost:3000/usuarios.json", function(error, response, body){
				if(response === undefined){
					console.log("Não consegui localizar o servidor");
					expect(503).toBe(200);
				}else{
					expect(response.statusCode).toBe(200);
				}	
				done();
			});
		});	
	});

	describe(" GET /usuarios.json?nome=user retornar [usuario]", function(){
		it("returns status code 200 e [user no serviço]",function(done){
			request.get("http://localhost:3000/usuarios.json?nome=user", function(error, response, body){
				if(response === undefined){
					console.log("Não consegui localizar o servidor");
					expect(503).toBe(200);
				}else{
					expect(response.statusCode).toBe(200);
					var json = JSON.parse(response.body);
					console.log(json); 
					expect(json.length).toBe(1);	
					expect(json[0].nome).toBe("user");
				}	
				done();
			});
		});	
	});

});
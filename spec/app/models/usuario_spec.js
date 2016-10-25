var Usuario = require('../../../app/models/usuario');
describe("Modelo de usuario", function(){
	describe(" atributo", function(){
		it(" [id].",function(){
			var usuario = new Usuario();
			expect(usuario.id).toBe(0);	
		});
		it(" [nome].",function(){
			var usuario = new Usuario();
			expect(usuario.nome).toBe("");
		});
		it(" [login].",function(){
			var usuario = new Usuario();
			expect(usuario.login).toBe("");
		});
		it(" [senha].",function(){
			var usuario = new Usuario();
			expect(usuario.senha).toBe("");
		});
		it(" [email].",function(){
			var usuario = new Usuario();
			expect(usuario.email).toBe("");
		});
	});
	
});
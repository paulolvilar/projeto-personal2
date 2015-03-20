//aluno.js
var verificaAutenticacao = require('../../config/auth');

module.exports = function(app) {

 	var controller = app.controllers.aluno;

	app.route('/alunos')
	.get(verificaAutenticacao,controller.listaTodos)
	.post(verificaAutenticacao,controller.salvaAluno)

	app.route('/alunos/:id')
	.get(verificaAutenticacao,controller.obtemAluno)
	.delete(verificaAutenticacao,controller.removeAluno)
};
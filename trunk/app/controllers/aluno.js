//aluno.js
module.exports = function (app) {
	var Aluno = app.models.aluno;
	var controller = {};
	controller.listaTodos = function(req, res) {
		var param = req.query.filter?req.query.filter:""
		var re = new RegExp(param, 'i');
		
		Aluno.find().or([{ 'nome': { $regex: re }}, { 'email': { $regex: re }}]).exec().then(
			function(alunos) {
				res.json(alunos);
			},
			function(erro) {
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	controller.obtemAluno = function(req, res) {
		var _id = req.params.id;
		Aluno.findById(_id).exec().then(
			function(aluno) {
				if (!aluno) throw new Error("Aluno não encontrado");
				res.json(aluno)
			},
			function(erro) {
				console.log(erro);
				res.status(404).json(erro)
			}
		);
	};
	controller.removeAluno = function(req, res) {
		var _id = req.params.id;
		Aluno.remove({"_id" : _id}).exec().then(
		function() {
			res.end();
		},
		function(erro) {
			return console.error(erro);
		}
		);

	};
	controller.salvaAluno = function(req, res) {
		var _id = req.body._id;
		if(_id) {
			Aluno.findByIdAndUpdate(_id, req.body).exec().then(
			function(aluno) {
				res.json(aluno);
			},
			function(erro) {
				console.error(erro)
				res.status(500).json(erro);
			}
			);
		} else {
			Aluno.create(req.body).then(
			function(aluno) {
				res.status(201).json(aluno);
			},
			function(erro) {
				console.log(erro);
				res.status(500).json(erro);
			}
			);
		}
	};

	return controller;
};
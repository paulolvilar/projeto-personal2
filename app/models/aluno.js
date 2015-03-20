//aluno.js
var mongoose = require('mongoose');
module.exports = function() {
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			index: {unique: true}
		},
		dataNascimento: {
			type: String,
		},
		dataInicio: {
			type: String,
		},
		sexo: {
			type: String,
		}
	});
	return mongoose.model('Aluno', schema);
};
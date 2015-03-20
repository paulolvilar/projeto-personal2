angular.module('personal').factory('Aluno',
function($resource) {
	return $resource('/alunos/:id');
});
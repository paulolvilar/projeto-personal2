angular.module('personal').factory('Contato',
function($resource) {
	return $resource('/contatos/:id');
});
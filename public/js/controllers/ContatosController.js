angular.module('contatooh').controller('ContatosController',function($scope, Contato) {
	$scope.contatos = []
	$scope.filtro = ''
	
	$scope.mensagem = {texto: ''}


	$scope.buscaContatos = function () {
		var filtro={}
		if ($scope.filtro.trim()!=''){
			filtro.filter=$scope.filtro.trim()
		}
		Contato.query(filtro,
			function(contatos) {
				$scope.contatos = contatos
				$scope.mensagem = {}
			},
			function(erro) {
				console.log(erro)
				$scope.mensagem = {texto: 'Não foi possível obter a lista'}
			}
		)
	}
	//buscaContatos()


	$scope.remove = function(contato) {
		Contato.delete({id: contato._id},
			$scope.buscaContatos,
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível remover o contato'
				}
			}
		)
	}
})
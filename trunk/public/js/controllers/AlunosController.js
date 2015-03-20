angular.module('personal').controller('AlunosController',function($scope, Aluno) {
	$scope.alunos = []
	$scope.filtro = ''
	
	$scope.mensagem = {texto: ''}


	$scope.buscaAlunos = function () {
		var filtro={}
		if ($scope.filtro.trim()!=''){
			filtro.filter=$scope.filtro.trim()
		}
		Aluno.query(filtro,
			function(alunos) {
				$scope.alunos = alunos
				$scope.mensagem = {}
			},
			function(erro) {
				console.log(erro)
				$scope.mensagem = {texto: 'Não foi possível obter a lista'}
			}
		)
	}
	//buscaContatos()


	$scope.remove = function(aluno) {
		Aluno.delete({id: aluno._id},
			$scope.buscaAlunos,
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível remover o aluno'
				}
			}
		)
	}
})
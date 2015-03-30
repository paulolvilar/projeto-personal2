angular.module('personal').controller('AnamneseController',

function($scope, $routeParams, Aluno) {

if($routeParams.alunoId){
	Aluno.get({id: $routeParams.alunoId},
	function(aluno) {
			$scope.aluno = aluno;
			if($scope.aluno.anamnese){
				$scope.anamnese = aluno.anamnese;
			}else{
				$scope.anamnese = {};
			}
	},
	function(erro) {
		$scope.mensagem = {
			texto: 'Não foi possível obter o aluno.'
		}
	});
}else{
	$scope.mensagem = {
			texto: 'Não foi possível obter o aluno.'
		}
}

function valida(){
	if(!$scope.anamnese.estatura){
		$scope.mensagem = {
			texto: 'Preencha a estatura.'
		}
		return false;
	}
	if(!$scope.anamnese.peso){
		$scope.mensagem = {
			texto: 'Preencha o peso.'
		}
		return false;
	}

	return true;
}

$scope.salva = function() {
	if(!valida()) return;

	$scope.aluno.anamnese = $scope.anamnese

	$scope.aluno.$save()
	.then(function() {
		$scope.mensagem = {texto: 'Salvo com sucesso'};
	})
	.catch(function(erro) {
		$scope.mensagem = {texto: 'Não foi possível salvar'};
	});
}

});
angular.module('personal').controller('AlunoController',

function($scope, $routeParams, Aluno) {

if($routeParams.alunoId){
	Aluno.get({id: $routeParams.alunoId},
	function(aluno) {
			$scope.aluno = aluno;
	},
	function(erro) {
		$scope.mensagem = {
			texto: 'Não foi possível obter o aluno.'
		}
	});
}else{
	$scope.aluno = new Aluno();
}

function valida(){
	if(!$scope.aluno.nome){
		$scope.mensagem = {
			texto: 'Preencha o nome.'
		}
		return false;
	}
	if(!$scope.aluno.email){
		$scope.mensagem = {
			texto: 'Preencha o email.'
		}
		return false;
	}
	if(!$scope.aluno.sexo){
		$scope.mensagem = {
			texto: 'Informe o sexo.'
		}
		return false;
	}
	var patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;  

    if(!$scope.aluno.dataNascimento){
		$scope.mensagem = {
			texto: 'Preencha a data de nascimento.'
		}
		return false;
	}
	if(!patternData.test($scope.aluno.dataNascimento)){
		$scope.mensagem = {
			texto: 'Preencha a data de nascimento no formato DD/MM/YYYY.'
		}
		return false;
	}  
	if(!$scope.aluno.dataInicio){
		$scope.mensagem = {
			texto: 'Preencha a data de inicio.'
		}
		return false;
	}
	if(!patternData.test($scope.aluno.dataInicio)){
		$scope.mensagem = {
			texto: 'Preencha a data de inicio no formato DD/MM/YYYY.'
		}
		return false;
	}  

	return true;
}

$scope.salva = function() {
	if(!valida()) return;

	$scope.aluno.$save()
	.then(function() {
		$scope.mensagem = {texto: 'Salvo com sucesso'};
		// limpa o formulário
		$scope.aluno = new Aluno();
	})
	.catch(function(erro) {
		$scope.mensagem = {texto: 'Não foi possível salvar'};
	});
}

Aluno.query(function(alunos) {
	$scope.alunos = alunos;
});

});
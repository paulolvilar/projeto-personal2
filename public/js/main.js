angular.module('personal', ['ngRoute', 'ngResource'])
.config(function($routeProvider) {
// 
$routeProvider.when('/contatos', {
templateUrl: 'partials/contatos.html',
controller: 'ContatosController'
});
$routeProvider.when('/contato/:contatoId', {
templateUrl: 'partials/contato.html',
controller: 'ContatoController'
});
$routeProvider.when('/contato', {
templateUrl: 'partials/contato.html',
controller: 'ContatoController'
});

// Cadastro de Aluno
$routeProvider.when('/alunos', {
templateUrl: 'partials/alunos.html',
controller: 'AlunosController'
});
	
$routeProvider.when('/aluno/:alunoId', {
templateUrl: 'partials/aluno.html',
controller: 'AlunoController'
});

$routeProvider.when('/aluno', {
templateUrl: 'partials/aluno.html',
controller: 'AlunoController'
});

// Cadastro de Anamnese
$routeProvider.when('/anamneses', {
	templateUrl: 'partials/anamneses.html'
});

$routeProvider.when('/anamnese', {
	templateUrl: 'partials/anamnese.html'
});


// Apos Logar
$routeProvider.otherwise({redirectTo: '/dashboard'});
});
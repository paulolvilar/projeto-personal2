module.exports = function(app) {
app.get('/', function(req, res) {
	res.render('index', { "usuarioLogado" : req.user.login});
});
app.get('/login', function(req, res) {
	res.render('login');
});
};
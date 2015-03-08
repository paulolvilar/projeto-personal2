var passport = require('passport');


module.exports = function(app) {
	app.get('/', function(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	});

	app.get('/login', function(req, res) {
		res.render('login',{message:req.flash('error')})		
	});

	app.post('/login',
	  passport.authenticate('local', { successRedirect: '/',
	                                   failureRedirect: '/login',
	                                   failureFlash: true })
	);

	app.get('/logout', function(req, res) {
		req.logOut(); // exposto pelo passport
		res.redirect('/');
	});
}
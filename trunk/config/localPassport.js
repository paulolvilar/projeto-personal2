var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');

module.exports = function() {
	var Usuario = mongoose.model('Usuario');

	passport.use(new LocalStrategy(
	  	function(username, password, done) {
	    Usuario.findOne({ login: username }, function(err, user) {
	      if (err) { return done(err); }
	      if (!user) {
	        return done(null, false, { message: 'Incorrect username.' });
	      }
	      if (!user.validPassword(password)) {
	        return done(null, false, { message: 'Incorrect password.' });
	      }
	      return done(null, user);
	    });
	  }
	));

	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
  		Usuario.findById(id).exec()
		.then(function(usuario) {
			done(null, usuario);
		});
	});
}
var Art = require('../models/Art.js');
var Dev = require('../models/Dev.js');

module.exports = function(app) {

	app.get('/', function(req,res) {
		res.render('index');
	});

	app.get('/art', function (req,res) {
		Art.find({}, function (error,doc) {
			if (error) {
				console.log(error);	
			} else {
				res.render('art', {artworks: doc});
			}
		});
	});

	app.get('/code', function (req,res) {
		Dev.find({}, function (error,doc) {
			if (error) {
				console.log(error);	
			} else {
				res.render('code-main', {apps: doc});
			}
		});
	});
}


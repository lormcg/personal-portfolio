var Art = require("../models/Art.js");

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
}


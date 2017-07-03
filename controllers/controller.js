var Art = require('../models/Art.js');
var Dev = require('../models/Dev.js');

module.exports = function(app) {

	app.get('/', function(req,res) {
		res.render('index');
	});
	//display general art page
	app.get('/art', function (req,res) {
		Art.find({}, function (error,doc) {
			if (error) {
				console.log(error);	
			} else {
				res.render('art', {artworks: doc});
			}
		});
	});
	//display main code index
	app.get('/code', function (req,res) {
		Dev.find({}, function (error,doc) {
			if (error) {
				console.log(error);	
			} else {
				res.render('code-main', {apps: doc});
			}
		});
	});
	//display individual code pages
	app.get('/code/:title', function (req, res) {
		Dev.findOne({ "title": req.params.title }, function (error, doc) {
			if (error) {
				console.log(error);
			} else {
				res.render('code-detail', {info: doc});
			}
		});

	});
}


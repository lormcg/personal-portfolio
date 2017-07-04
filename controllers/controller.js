var Art = require('../models/Art.js');
var Dev = require('../models/Dev.js');

module.exports = function(app) {

	app.get('/', function(req,res) {
		res.render('index');
	});

	//ART ROUTES

	//display general art page
	//currently just showing all in one go. will have splash later.
	// app.get('/art', function (req,res) {
	// 	Art.find({}, function (error,doc) {
	// 		if (error) {
	// 			console.log(error);	
	// 		} else {
	// 			res.render('art', {artworks: doc});
	// 		}
	// 	});
	// });

	app.get('/art/:year', function (req,res) {

		Art.find({  'year' : req.params.year })

		.exec(function (error,doc) {
			if (error) {
				console.log(error);
			} else {
				console.log(doc);

				res.render('art', {artworks: doc});
			}
		});

	});

	//CODE ROUTES

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
		Dev.findOne({ "title" : req.params.title })

		.exec(function (error, doc) {
			if (error) {
				console.log(error);
			} else {
				console.log(doc);

				res.render('code-detail', {doc});
			}
		});

	});


}


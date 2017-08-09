var Art = require('../models/Art.js');
var Dev = require('../models/Dev.js');

module.exports = function(app) {

///INDEX ROUTE

	app.get('/', function(req,res) {
		res.render('index');
	});

//ART ROUTES

	//display general art page, linking to art by year.
	app.get('/art', function (req,res) {

		// Art.find({}).distinct('year')
		// 		.exec(function (error,doc) {
		// 		if (error) {
		// 			console.log(error);
		// 		} else {
		// 			var artworkYears = doc;
		// 			for (let years of artworkYears) {
		// 				Art.
		// 			}
		// 		}
		// 	});
		// });

		// Art.find({}).then( function (allArt) {
		// 	Art.find({}).distinct('year')
		// 		.exec(function (error,doc) {
		// 		if (error) {
		// 			console.log(error);
		// 		} else {
		// 			console.log(allArt);
		// 			res.render('art-main', {years: doc});
		// 		}
		// 	});
		// });


		//original query	

		Art.find({}).distinct('year')

			.exec(function (error,doc) {
			if (error) {
				console.log(error);
			} else {
				console.log(doc);
				res.render('art-main', {years: doc});
			}
		});
	});
	//pages for art by year.
	app.get('/art/:year', function (req,res) {

		Art.find({ 'year' : req.params.year })

		.exec(function (error,doc) {
			if (error) {
				console.log(error);
			} else {
				// console.log(doc);

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
				// console.log(doc);

				res.render('code-detail', {doc});
			}
		});

	});

//CONTACT ROUTE

	app.get('/contact', function(req,res) {
		res.render('contact');
	});


}


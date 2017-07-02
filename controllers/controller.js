module.exports = function(app) {

	let things = {
		name: art;
	}

	app.get('/', function(req,res) {
		res.render('index', {stuff: things});
	});
}


//DEPENDENCIES

var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

var Art = require('./models/Art.js');


//EXPRESS CONFIG

var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static(process.cwd() + '/public'));

//HANDLEBARS CONFIG

var hbs = exphbs.create({
	defaultLayout: 'main',
	partialsDir:['./views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//MONGOOSE CONFIG

mongoose.connect('mongodb://localhost/lauramcginn');
var db = mongoose.connection;

db.on('error', function(error) {
	console.log('Mongoose error: ' + error );
});

db.once('open', function() {
	console.log('Mongoose connected!')
});

//IMPORT CONTROLLER ROUTES
var routes = require('./controllers/controller.js')(app);

app.listen(port, function() {
	console.log('App running on port ' + port);
});
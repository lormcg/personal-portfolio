//DEPENDENCIES

var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');

//EXPRESS SETUP

var app = express();
var port = 8080;

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(process.cwd() + '/public'));

//HANDLEBARS

var hbs = exphbs.create({
	defaultLayout: 'main',
	partialsDir:['./views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js')(app);

app.listen(port, function() {
	console.log('App running on port ' + port);
});
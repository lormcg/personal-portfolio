//Dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DevSchema = new Schema({

	title: {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"liveURL": {
		type: String,
		trim: true,
		unique: true,
		required: true
	},

	"githubRepo": {
		type: String,
		trim: true,
		unique: true,
		required: true
	},

	"tagline": {
		type: String,
		trim: true,
		unique: false,
		required: true
	},

	"summary": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image1URL": {
		type: String,
		trim: true,
		unique: false,
		required: true
	},

	"image1caption": {
		type: String,
		trim: true,
		unique: false,
		required: true
	},

	"image2URL": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image2caption": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image3URL": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image3caption": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"technologiesUsed": {
		type: String,
		trim: true,
		unique: false,
		required: true
	}

});


var Dev = mongoose.model('Dev', DevSchema);

module.exports = Dev;
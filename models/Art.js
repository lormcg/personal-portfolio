//Dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtSchema = new Schema({
	imageURL: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	title: {
		type: String,
		trim: true,
		unique: false,
		required: false
	},
	medium: {
		type: String,
		trim: true,
		unique: false,
		required: false
	},
	dimensions: {
		type: Object,
		trim: false,
		unique: false,
		required: false
	},
	year: {
		type: Number,
		unique: false,
		required: true
	},
	notes: {
		type: String

	}

});


var Art = mongoose.model('Art', ArtSchema);

module.exports = Art;
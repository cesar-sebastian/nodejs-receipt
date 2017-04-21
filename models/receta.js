var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var recetaSchema = new Schema({
	nombre: { type: String },
	dni: 		{ type: String },
	imagen: { type: String }
});

module.exports = mongoose.model('Receta', recetaSchema);

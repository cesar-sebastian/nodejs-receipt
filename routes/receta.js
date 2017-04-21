//File: routes/receta.js
module.exports = function(app) {

  var Receta = require('../models/receta.js');

  //GET - Return all tvshows in the DB
  findAllRecetas = function(req, res) {
  	Receta.find(function(err, recetas) {
  		if(!err) {
        console.log('GET /recetas')
  			res.send(recetas);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	Receta.findById(req.params.id, function(err, receta) {
  		if(!err) {
        console.log('GET /receta/' + req.params.id);
  			res.send(receta);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addReceta = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var receta = new Receta({
  		nombre: req.body.nombre,
  		dni: 	  req.body.dni,
  		imagen: req.body.imagen
  	});

  	receta.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(receta);
  };

  //PUT - Update a register already exists
  /*updateTVShow = function(req, res) {
  	TVShow.findById(req.params.id, function(err, tvshow) {
  		tvshow.title   = req.body.petId;
  		tvshow.year    = req.body.year;
  		tvshow.country = req.body.country;
  		tvshow.poster  = req.body.poster;
  		tvshow.seasons = req.body.seasons;
  		tvshow.genre   = req.body.genre;
  		tvshow.summary = req.body.summary;

  		tvshow.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(tvshow);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteTVShow = function(req, res) {
  	TVShow.findById(req.params.id, function(err, tvshow) {
  		tvshow.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }*/

  //Link routes and functions
  app.get('/recetas', findAllRecetas);
  app.get('/receta/:id', findById);
  app.post('/receta', addReceta);
  //app.put('/tvshow/:id', updateTVShow);
  //app.delete('/tvshow/:id', deleteTVShow);

}

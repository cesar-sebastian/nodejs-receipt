var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

//routes = require('./routes/tvshows')(app);
routes = require('./routes/receta')(app);

mongoose.connect('mongodb://localhost/receta', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(3000, '192.168.0.5', function() {
  console.log("Node server running on http://192.168.0.5:3000");
});

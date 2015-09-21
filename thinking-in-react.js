const Workshopper = require('workshopper')
    , path        = require('path')
    , http = require('http')
    , fs = require('fs')
    , Server = require('./server.js');



if (process.argv[2] === 'server') {
	new Server(3333, path.resolve(process.cwd(), process.argv[3]));

} else {
	Workshopper({
	    name              : 'thinking-in-react'
	  , title             : 'LEARN YOU THE REACT.JS THINKING FOR MUCH WIN(D)!'
	  , appDir            : __dirname
	  , exerciseDir       : path.join(__dirname, '/exercises/')
	//   // , helpFile          : path.join(__dirname, 'help.txt')
	//   // , prerequisitesFile : path.join(__dirname, 'prerequisites.txt')
	//   // , creditsFile       : path.join(__dirname, 'credits.txt')
	});

}

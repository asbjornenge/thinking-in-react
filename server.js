var path = require('path');
var browserify = require('browserify');
var fs = require('fs');
var http = require('http');

var Server = function(port, solution_path) {
	var self = this;
	self.port = port;
	self.solution_path = solution_path;
	self.basepath = __dirname;
	self.bundlePath = self.basepath + '/static/workshop_render.js';
	self.server_is_running = false;
	self.copy_solution(self.solution_path, self.bundleFiles.bind(self));
	fs.watchFile(self.solution_path, function(event, file) {
		self.copy_solution(self.solution_path, self.bundleFiles.bind(self));
	});
};

Server.prototype.copy_solution = function(file, cb) {
	var self = this;
	fs.readFile(file, {encoding: 'utf-8'}, function(error, solution) {
		fs.writeFile(self.basepath + '/static/solution_tmp.js', solution, cb);
	});
};
	
Server.prototype.bundleFiles = function() {
	var self = this;
	var inject_js = browserify([self.bundlePath], {});
	console.log('bundling react and solution');
	inject_js.bundle(function(error, js) {
		if (error) {
			console.log(error);
		}
		fs.writeFile(self.basepath + '/static/tmp.js', js, function(error) {
			if (error) {
				console.log(error);
			}
			console.log('bundle written to static/tmp.js');
			if (!self.server_is_running) {
				self.fireUpServer();
				
			}

		});

	});
};

Server.prototype.fireUpServer = function() {
	var self = this;
	var server = http.createServer(function(req, resp) {
		if (req.url === '/tmp.js') {
			fs.readFile(self.basepath + '/static/tmp.js', {encoding: 'utf-8'}, function(error, js) {
				resp.writeHead(200, {'Content-type':'application/javascript; charset=utf-8'});
				resp.end(js);
			});
		} else if (req.url.indexOf('favicon') > 0) {
			console.log('Ain\'t gonna give you no favicon');
		} else {
			fs.readFile(self.basepath + '/static/index.html', {encoding: 'utf-8'}, function(error, html) {
				resp.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
				resp.end(html);
			});
			
		}
	});
	console.log('now listening to port ' + self.port);
	server.listen(self.port);
	self.server_is_running = true;
};


module.exports = Server;
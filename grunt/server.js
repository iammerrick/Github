module.exports = function(grunt) {

	// Nodejs libs.
	var path = require('path');

	// External libs.
	var connect = require('connect');

	// ==========================================================================
	// TASKS
	// ==========================================================================

	grunt.registerTask('server', 'Start a static web server.', function() {

		// Get values from config, or use defaults.
		var port = grunt.config('server.port') || 8000;
		var base = grunt.config('server.base') || '.';
		var basePath = path.resolve(base);

		// This task is async
		var taskDone = this.async();

		var server = connect();
		// Ignore favicon
		server.use(connect.favicon());
		// Static files
		server.use(connect.static(basePath, {hidden: false}));
		// Directory
		server.use(connect.directory(basePath, {
			hidden: false,
			icons: true
		}));

		// Start server.
		grunt.log.write('Starting static web server on port ' + port + '...');
		server.listen(port, function () {
			grunt.log.ok();
		});
	});

};

module.exports = function(grunt) {

	grunt.initConfig({
		server: {
			port: 3000,
			base: 'src'
		}
	});

	grunt.loadTasks('grunt');
};

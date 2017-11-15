module.exports = function (grunt) {
require("load-grunt-tasks")(grunt);
	grunt.initConfig({
		babel: {
			compile: {
				options: {
					presets: ['env']
				},
				files: {
					'public/app.js': 'app/*.js'
				}
			}
        },
        watch: {
            scripts: {
              files: ['app/*.js'],
              tasks: ['babel'],
              options: {
                spawn: false,
              },
            },
          },
		
	});
    grunt.loadNpmTasks('grunt-contrib-watch');
     
    grunt.registerTask('default', ['babel']);
    
    
}
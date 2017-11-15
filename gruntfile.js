module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);
	grunt.initConfig({
		babel: {
			compile: {
				options: {
					sourceMap: true,
					presets: ['env']
				},
				files: {
					'public/app.js': 'index.js'
				}
			}
        },
        watch: {
            scripts: {
              files: ['*.js'],
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
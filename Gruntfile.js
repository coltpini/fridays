module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		stylus: {
			compile: {
				files : {
					'app/styles/app.css' : ['app/styles/app.styl']
				}
			}
		},
		watch: {
			stylus: {
				files: ['app/styles/*.styl'],
				tasks: ['stylus']
			}
		}
	});

	grunt.registerTask('dev',['watch']);
	grunt.registerTask('build',['stylus']);
};
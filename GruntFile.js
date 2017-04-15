module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					transform: [
						["babelify"]
					]
				},
				files: {
					"./app/main.bundle.js": ["./app/main.js"]
				}
			}
		},
		watch: {
			scripts: {
				files: ["./app/*.js"],
				tasks: ["browserify"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ["browserify", "watch"]);
	grunt.registerTask("build", ["browserify"]);
};
module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					browserifyOptions: {
						debug: true
					},
					transform: [
						["babelify", {presets: "es2015"}]
					]
				},
				files: {
					"./app/main.bundle.js": ["./app/grunt-contrib-watchlasses/*.js", "./app/services/*.js"]
				}
			}
		},
		eslint: {
			target: ["./app/classes/*.js", "./app/services/*.js"]
		},
		watch: {
			scripts: {
				files: ["./app/grunt-contrib-watchlasses/*.js", "./app/services/*.js"],
				tasks: ["eslint", "browserify"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');

	grunt.registerTask("default", ["browserify", "watch"]);
	grunt.registerTask("build", ["browserify"]);
	grunt.registerTask("lint", ["eslint"]);
};
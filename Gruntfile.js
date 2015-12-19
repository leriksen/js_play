module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["*.js"],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      coffee: {
        files: ["*.coffee"],
        tasks: ["coffee"]
      },
      scripts: {
        files: ["*.js"],
        tasks: ["jshint"]
      }
    },
    coffee: {
      glob_to_multiple: {
        options: {
          sourceMap: true,
          sourceMapDir: '.'
        },
        expand:  true,
        flatten: true,
        cwd:     '.',
        src:     ['*.coffee'],
        dest:    '.',
        ext:     '.js'
      }
    },
    clean: {
      js:  ["./*.js", "!./Gruntfile.js"],
      map: ["./*.map"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("default", ["coffee", "jshint"]);
};

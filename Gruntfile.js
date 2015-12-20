module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['js/*.js'],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      coffee: {
        files: ['src/coffee/*.coffee'],
        tasks: ['coffee:compile']
      },
      scripts: {
        files: ['*.js'],
        tasks: ['jshint']
      },
      haml: {
        files: ['src/haml/**/*.haml'],
        tasks: ['haml:compile']
      }
    },
    coffee: {
      compile: {
        options: {
          sourceMap: true,
          sourceMapDir: 'js'
        },
        expand:  true,
        flatten: true,
        cwd:     'src/coffee',
        src:     ['*.coffee'],
        dest:    'js',
        ext:     '.js'
      }
    },
    clean: {
      js:   ['js'],
      html: ['*.html'],
      css:  ['public/app.css'],
      map:  ['**/*.map']
    },
    haml: {
      compile: {
        files: [
          { 
            expand: true,
            cwd:   'src/haml',
            src:   '**/*.haml',
            dest:  '.',
            ext :  '.html'
          }
        ]
      }
    },
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/styles',
            src: ['app.scss'],
            dest: 'public',
            ext: '.css'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml2html');

  grunt.registerTask('default', ['coffee', 'jshint', 'haml:compile', 'sass']);
};

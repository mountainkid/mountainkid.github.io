module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    concat: {
      jsrelease: {
        src: ['javascript/bootstrap.js', 'javascript/top-nav.js', 'javascript/bootstrap-image-gallery.min.js', 'javascript/blueimp-gallery.js'],
        dest: 'assets/application.js'
      },
      cssrelease: {
        src: ['assets/css/top-nav.css', 'assets/css/bootstrap-image-gallery.min.css', 'assets/css/blueimp-gallery.min.css'],
        dest: 'assets/css/release/main.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/application.min.js': ['javascript/bootstrap.js', 'javascript/top-nav.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/application.min.css': ['assets/application.css', 'assets/css/top-nav.css']
        }
      }
    },
    jshint: {
      files: []
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['default']
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Register tasks
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
};

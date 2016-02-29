module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    concat: {
      jsrelease: {
        src: ['assets/js/toggle.js', 'assets/js/main.js'],
        dest: 'assets/js/release/main.js'
      },
      cssrelease: {
        src: ['assets/css/ie10-viewport-bug-workaround.css', 'assets/css/cover.css', 'assets/css/nav-top.css', 'assets/css/bootstrap-image-gallery.min.css', 'assets/css/blueimp-gallery.min.css', 'assets/css/main.css', 'assets/css/snipcart.css'],
        dest: 'assets/css/release/css/main.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/release/main.min.js': ['assets/js/toggle.js', 'assets/js/main.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/css/release/css/main.min.css': ['assets/css/ie10-viewport-bug-workaround.css', 'assets/css/nav-top.css', 'assets/css/bootstrap-image-gallery.min.css', 'assets/css/blueimp-gallery.min.css', 'assets/css/main.css', 'assets/css/snipcart.css']
        }
      }
    },
    jshint: {
      files: ['assets/js/toggle.js', 'assets/js/main.js']
    },
    watch: {
      files: ['<%= concat.jsrelease.src %>', '<%= concat.cssrelease.src %>', 'manifest.json'],
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

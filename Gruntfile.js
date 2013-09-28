module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: "css/scss",
          cssDir: "css",
          force: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8001
        }
      }
    },
    watch: {
      compass: {
        files: [
          'css/**/*.{scss,sass}'
        ],
        tasks: ['compass:dev']
      }
    },
    hbt: {
      all: {
        options: {
          data: grunt.file.readJSON('timelines.json'),
          partials: 'src/partials/*.hbt'
        },
        files: [
          { 
            cwd: 'src/',
            src: ['*.hbt'], // Actual pattern(s) to match.
            expand: true,
            dest: '',
            ext: '.html'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hbt');

  grunt.registerTask('serve', function() {
    grunt.task.run([
      'connect',
      'compass:dev',
      'watch:compass'
    ]);
  });

};
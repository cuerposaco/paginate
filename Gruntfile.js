module.exports = function(grunt) {

  grunt.initConfig({

    config: {
      moduleName:'paginate',
      buildFolder: 'build',
      srcFolder: 'src',
    },
    
    pkg: grunt.file.readJSON('package.json'),

    /**
    *  Validate JS code
    */
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    
    /**
    *  Create UMD Module with templates [for production]
    */
    browserify: {
      module: {
        options: {
          browserifyOptions: {
            standalone  : '<%= config.moduleName %>',
            debug       : true
          }   
        },
        files:{
          '<%= config.buildFolder %>/<%= config.moduleName %>.js':['<%= config.srcFolder %>/<%= config.moduleName %>.js']
        }
      },
    },

    /**
    *  Compress module file [for production] 
    */
    uglify: {
      module: {
        options:{
           // the banner is inserted at the top of the output
           banner: '/*! <%= config.moduleName %>.js\n * version: <%= pkg.version %>\n * Release date: <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          '<%= config.buildFolder %>/<%= config.moduleName %>.min.js': ['<%= config.buildFolder %>/<%= config.moduleName %>.js']
        }
      }
    },
  });

  /**
  *  Grunt module tasks
  */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');

  /**
  *  Grunt task
  */
  grunt.registerTask('default', ['jshint','browserify','uglify']);



};
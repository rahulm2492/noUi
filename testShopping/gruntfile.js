module.exports = {
    options: {
        sourceMap: true,
        stage: 0
    },
    files: {
        expand: true,
        src: ['index.js'],
        ext: '-compiled.js'
    }



    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask("default", ["babel"]);
};
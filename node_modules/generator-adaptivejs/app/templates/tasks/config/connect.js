module.exports = function(grunt){
    var addRequireJSGlob = function(connect, options, middlewares) {
        middlewares.unshift(require('requirejs-glob')());
        return middlewares;
    };

    return {
        test: {
            options: {
                hostname: '0.0.0.0',
                port: (grunt.option('p') || 8888),
                base: '.',
                middleware: addRequireJSGlob
            }
        }
    };
};

module.exports = function(grunt) {
    return {
        prod: {
            options: {
                bundleExec: true,
                style: 'compressed',
                sourcemap: 'none',
                defaultEncoding: 'utf-8',
                loadPath: [
                    'app/',
                    'app/bower_components/'
                ],
                require: [
                    'compass/import-once/activate'
                ]
            },
            files: [{
                expand: true,
                cwd: 'app/',
                src: [
                    '**/*.scss',
                    '!bower_components/**/*.scss'
                ],
                dest: 'build/css',
                ext: '.css',
            }],
        },
        dev: {
            options: {
                bundleExec: true,
                style: 'expanded',
                sourcemap: 'auto',
                defaultEncoding: 'utf-8',
                loadPath: [
                    'app/',
                    'app/bower_components/'
                ],
                require: [
                    'compass/import-once/activate'
                ]
            },
            files: [{
                expand: true,
                cwd: 'app/',
                src: [
                    '**/*.scss',
                    '!bower_components/**/*.scss'
                ],
                dest: 'build/css',
                ext: '.css',
            }],
        }
    };
};

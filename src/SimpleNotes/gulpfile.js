/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    gp_clean = require('gulp-clean'),
    gp_concat = require('gulp-concat'),
    gp_less = require('gulp-less'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    gp_typescript = require('gulp-typescript'),
    gp_uglify = require('gulp-uglify'),
    gp_minifyhtml = require('gulp-minify-html'),
    gp_inlineNg2Template = require('gulp-inline-ng2-template'),
    gp_util = require('gulp-util');

var SystemBuilder = require('systemjs-builder');

/// Define paths
var srcPaths = {
    app: ['Client/app/main.ts', 'Client/app/**/*.ts'],
    js: ['Client/js/**/*.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/typescript/lib/typescript.js'
    ],
    js_angular: [
        'node_modules/@angular/**'
    ],
    js_rxjs: [
        'node_modules/rxjs/**'
    ],
    js_moment: [
        'node_modules/moment/src/**/*.js'
    ],
    js_bootstrap: [
        'node_modules/bootstrap/dist/**'
    ],
    js_ng2_bootstrap: [
        'node_modules/ng2-bootstrap/**/*.js'
    ],
    js_ng2_bootstrap_modal: [
        'node_modules/ng2-bootstrap-modal/dist/**/*.js'
    ],
    less: [
        'Client/less/**/*.less'
    ],
    template: ['Client/app/**/*.html'],
    resource: ['Client/resources/**']
};
var destPaths = {
    app: 'wwwroot/app/',
    css: 'wwwroot/css/',
    js: 'wwwroot/js/',
    js_angular: 'wwwroot/js/@angular/',
    js_rxjs: 'wwwroot/js/rxjs/',
    js_moment: 'wwwroot/js/moment/',
    js_bootstrap: 'wwwroot/js/bootstrap/',
    js_ng2_bootstrap: 'wwwroot/js/ng2-bootstrap/',
    js_ng2_bootstrap_modal: 'wwwroot/js/ng2-bootstrap-modal/',
    resource: 'wwwroot/resources/',
    css_dev: 'Client/css/',
};

// Compile, minify and create sourcemaps all TypeScript files and place them to wwwroot/app, together with their js.map files.
gulp.task('app', ['app_clean'], function () {
    gulp.src(srcPaths.resource)
        .pipe(gulp.dest(destPaths.resource));
    gulp.src(srcPaths.template)
        //.pipe(gp_minifyhtml({ empty: true })) // disable uglify
        //.on('error', function (err) { gp_util.log(gp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(destPaths.app));
    return gulp.src(srcPaths.app)
        .pipe(gp_sourcemaps.init())
        .pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
        .pipe(gp_uglify({ mangle: false }))
        .on('error', function (err) { gp_util.log(gp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gp_sourcemaps.write('/'))
        .pipe(gulp.dest(destPaths.app));
});

// Delete wwwroot/app contents
gulp.task('app_clean', [], function () {
    return gulp.src(destPaths.app + "*", { read: false })
        .pipe(gp_clean({ force: true }));
});
// Copy all JS files from external libraries to wwwroot/js
gulp.task('js', [], function () {
    gulp.src(srcPaths.js_angular)
        .pipe(gulp.dest(destPaths.js_angular));
    gulp.src(srcPaths.js_rxjs)
        .pipe(gulp.dest(destPaths.js_rxjs));
    gulp.src(srcPaths.js)
    // .pipe(gp_uglify({ mangle: false })) // disable uglify
    // .pipe(gp_concat('all-js.min.js')) // disable concat
        .pipe(gulp.dest(destPaths.js));
    gulp.src(srcPaths.js_moment)
        .pipe(gulp.dest(destPaths.js_moment));
    gulp.src(srcPaths.js_bootstrap)
        .pipe(gulp.dest(destPaths.js_bootstrap));
    gulp.src(srcPaths.js_ng2_bootstrap_modal)
        .pipe(gulp.dest(destPaths.js_ng2_bootstrap_modal));
    return gulp.src(srcPaths.js_ng2_bootstrap)
        .pipe(gulp.dest(destPaths.js_ng2_bootstrap));
});
// Copy all html files from external libraries to wwwroot/app
gulp.task('template', [], function () {
    return gulp.src(srcPaths.template)
        //.pipe(gp_minifyhtml({ empty: true })) // disable uglify
        //.on('error', function (err) { gp_util.log(gp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(destPaths.app));
});
// Delete wwwroot/js contents
gulp.task('js_clean', [], function () {
    return gulp.src(destPaths.js + "*", { read: false })
    .pipe(gp_clean({ force: true }));
});
// Process all LESS files and output the resulting CSS in wwwroot/css
gulp.task('less', ['less_clean'], function () {
    return gulp.src(srcPaths.less)
        .pipe(gp_less())
        .pipe(gulp.dest(destPaths.css));
});
// Process all LESS files and output the resulting CSS in wwwroot/css
gulp.task('less_dev', [], function () {
    return gulp.src(srcPaths.less)
        .pipe(gp_less())
        .pipe(gulp.dest(destPaths.css_dev));
});
// Delete wwwroot/css contents
gulp.task('less_clean', [], function () {
    return gulp.src(destPaths.css + "*.*", { read: false })
    .pipe(gp_clean({ force: true }));
});
// Watch specified files and define what to do upon file changes
gulp.task('watch', [], function () {
    gulp.watch([srcPaths.app, srcPaths.js], ['app', 'js']);
});
// Global cleanup task
gulp.task('cleanup', ['app_clean', 'js_clean', 'less_clean']);
// Define the default task so it will launch all other tasks
//gulp.task('default', ['app', 'js', 'less', 'watch']);
gulp.task('default', ['app', 'js', 'less']);

/*gulp.task('default', function () {
    // place code for your default task here
});*/



gulp.task('bundle_rxjs', function () {
    var builder = new SystemBuilder('./', {
        paths: { "rxjs/*": "node_modules/rxjs/*.js" },
        map: { "rxjs": "node_modules/rxjs" },
        packages: { "rxjs": { main: 'Rx.js', defaultExtension: "js" } }
    });

    builder.bundle('rxjs', 'wwwroot/js/rxjs/Rx.min.js', {
        sourceMaps: true,
        minify: false,
        mangle: true
    });
});

gulp.task('bundle_app_buildStatic', function () {
    //https://github.com/angular/angular/issues/10933
    //https://stackoverflow.com/questions/42564743/issues-with-es6-import-systemjs-0-20-9-typescript-angular-2-jspm-0-17-0-b/42611789#42611789
    //https://stackoverflow.com/questions/39272994/resolving-path-in-systemjs-builder
    var builder = new SystemBuilder("client");

    builder.loadConfig('client/systemjs.config.js')
        .then(function () {
            var outputFile = './wwwroot/app/angular.bundle.js';
            return builder.buildStatic('app/main', outputFile, {
                minify: false,
                mangle: false
            });
        })
        .then(function () {
            console.log('bundle built successfully!');
        });
});



/**bundle ok but dont know to load with systemJS*/
gulp.task('bundle_app_build', function () {
    //https://github.com/angular/angular/issues/10933
    //https://stackoverflow.com/questions/42564743/issues-with-es6-import-systemjs-0-20-9-typescript-angular-2-jspm-0-17-0-b/42611789#42611789
    //https://stackoverflow.com/questions/39272994/resolving-path-in-systemjs-builder
    var builder = new SystemBuilder("client");

    builder.loadConfig('client/systemjs.config.js')
        .then(function () {
            var outputFile = './wwwroot/app/angular.bundle.js';
            return builder.bundle('app/main', outputFile, {
                minify: false,
                mangle: false
            });
        })
        .then(function () {
            console.log('bundle built successfully!');
        });
});



/*------------------------------------------*/
/**bundle ok but dont know to use*/
gulp.task('bundle', ['bundle-app', 'bundle-dependencies'], function () { });

gulp.task('copy-template', function () {
    return gulp.src('client/app/**/*.html')
        .pipe(gulp.dest('dist/app'));
});

gulp.task('inline-templates', function () {
    
    return gulp.src('client/app/**/*.ts')
      //.pipe(gp_inlineNg2Template({ useRelativePaths: true, indent: 0, removeLineBreaks: true, base: '/client/app' }))
      .pipe(gp_typescript({
          "baseUrl": "Client",
          "target": "es5",
          "module": "commonjs",
          "moduleResolution": "node",
          "sourceMap": true,
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "removeComments": true,
          "lib": ["es2015", "es5", "dom"],
          "noImplicitAny": false
      }))
      .pipe(gulp.dest('dist/app'));
});

gulp.task('bundle-app', ['inline-templates'], function () {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new SystemBuilder('', 'client/dist-systemjs.config.js');

    return builder
      //.bundle('dist/app/**/* - [@angular/**/*.js] - [rxjs/**/*.js]', 'wwwroot/bundles/app.bundle.js', { minify: false })
        .bundle('[dist/app/**/*]', 'wwwroot/bundles/app.bundle.js', { minify: false })
      .then(function () {
          console.log('Build complete');
      })
      .catch(function (err) {
          console.log('Build error');
          console.log(err);
      });
});

gulp.task('bundle-dependencies', ['inline-templates'], function () {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new SystemBuilder('', 'client/dist-systemjs.config.js');

    return builder
      //.bundle('dist/app/**/*.js - [dist/app/**/*.js]', 'wwwroot/bundles/dependencies.bundle.js', { minify: false })
        .bundle('dist/app/**/* - [dist/app/**/*.js]', 'wwwroot/bundles/dependencies.bundle.js', { minify: false })
      .then(function () {
          console.log('Build complete');
      })
      .catch(function (err) {
          console.log('Build error');
          console.log(err);
      });
});
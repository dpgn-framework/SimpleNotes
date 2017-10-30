(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // our application files
        '@angular': 'js/@angular', // angular2 packages
        'rxjs': 'js/rxjs', // Rxjs package
        'moment': 'js/moment',
        'ng2-bootstrap': 'js/ng2-bootstrap/bundles',
        'ng2-bootstrap-modal': 'js/ng2-bootstrap-modal'
    };
    // packages tells the System loader which filename and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
        'moment': { main: 'moment.js', defaultExtension: 'js' },
        'ng2-bootstrap': { main: 'ngx-bootstrap.umd.js', defaultExtension: 'js' },
        'ng2-bootstrap-modal': { main: 'index.js', defaultExtension: 'js' }
    };

    /*var bundles = {
        'app/angular.bundle.js': ['app/main', 'app/login/login.module', 'app/app.module', '@angular/core', '@angular/compiler', '@angular/platform-browser', '@angular/common'],
        'js/rxjs/Rx.min.js': [
            "rxjs/*",
            "rxjs/symbol/*",
            "rxjs/operator/*",
            "rxjs/observable/*",
            "rxjs/add/operator/*",
            "rxjs/add/observable/*",
            "rxjs/util/*"
        ]  
    };*/

    // configure @angular packages
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
    ];

    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js',
            defaultExtension: 'js' };
    }
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName +
    '.umd.js', defaultExtension: 'js' };
    };
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages,
        //bundles: bundles
    }
    System.config(config);
})(this);
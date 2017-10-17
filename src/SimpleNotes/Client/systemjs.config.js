(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // our application files
        '@angular': 'node_modules/@angular', // angular2 packages
        'rxjs': 'node_modules/rxjs', // Rxjs package
        'moment': 'node_modules/moment',
        'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles',
        'ng2-bootstrap-modal': 'node_modules/ng2-bootstrap-modal'
    };
    // packages tells the System loader which filename and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
        'moment': { main: 'moment.js', defaultExtension: 'js' },
        'ng2-bootstrap': { main: 'ngx-bootstrap.umd.js', defaultExtension: 'js' },
        'ng2-bootstrap-modal': { main: 'index.js', defaultExtension: 'js' }
    };
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
        packages: packages
    }
    System.config(config);
})(this);
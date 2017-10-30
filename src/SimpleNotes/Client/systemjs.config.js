(function (global) {
    /*var meta= {
        '@angular/core': { esModule: true },
        '@angular/common': { esModule: true },
        '@angular/compiler': { esModule: true },
        '@angular/platform-browser': { esModule: true },
        '@angular/platform-browser-dynamic': { esModule: true },
        '@angular/http': { esModule: true },
        '@angular/router': { esModule: true },
        '@angular/forms': { esModule: true }
    }*/

    var paths = {
        'npm:': './node_modules/'
    }

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // our application files
        '@angular': 'npm:@angular', // angular2 packages
        'rxjs': 'npm:rxjs', // Rxjs package
        'moment': 'npm:moment',
        'ng2-bootstrap': 'npm:ng2-bootstrap',
        'ng2-bootstrap-modal': 'npm:ng2-bootstrap-modal'
                
        // angular bundles
        /*'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',*/
    };
    // packages tells the System loader which filename and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
        'moment': { main: 'moment.js', defaultExtension: 'js' },
        'ng2-bootstrap': { main: 'bundles/ngx-bootstrap.umd.min.js', defaultExtension: 'js' },
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
      'router'
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
        paths: paths,
        //meta: meta
    }
    System.config(config);
})(this);
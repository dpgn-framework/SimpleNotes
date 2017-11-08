import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// owner modules
import { DialogModule } from 'app/dialogs/dialog.module';

//third party modules
import { Ng2BootstrapModule } from 'ng2-bootstrap';

// infrastructure
import {
    ServiceLocator,
    sn_components, sn_control_components,
    sn_entry_components, sn_services, sn_directives, sn_pipes
} from 'app/home/home.declare';

// routing config
import { homeRouting } from 'app/home/home.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,

        DialogModule,
        Ng2BootstrapModule.forRoot(),
        
        homeRouting
    ],
    providers: [sn_services],
    declarations: [
        sn_directives, sn_components, sn_control_components, sn_entry_components, sn_pipes
    ],
    exports: [
        sn_directives, sn_components, sn_control_components, sn_entry_components, sn_pipes
    ],
    entryComponents: [
        sn_entry_components
    ]
})
export class HomeModule {
    constructor(private injector: Injector) {
        ServiceLocator.injector = injector;
    }
}
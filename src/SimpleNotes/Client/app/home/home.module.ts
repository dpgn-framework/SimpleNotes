import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DialogModule } from 'app/dialogs/dialog.module';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { NoteComponent } from 'app/note/note.component';
import { DemoComponent } from 'app/demo/demo.component';

import { SnDialogService } from 'app/services/dialog.service';
import { DemoCustomDialog } from 'app/demo/demo-custom.dialog';

import { homeRouting } from 'app/home/home.routing';

import { ClickOutsideDirective } from 'app/components/ng2-click-outside.directive';
import { SnDatepickerComponent } from 'app/components/date.picker.component';

export const myComponents = [
    HomeComponent, AboutComponent, NoteComponent, DemoComponent,
    ClickOutsideDirective, SnDatepickerComponent,
    DemoCustomDialog
];

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
    providers: [SnDialogService ],
    declarations: [
        myComponents
    ],
    exports: [
        myComponents
    ],
    entryComponents: [
        DemoCustomDialog
    ]
})
export class HomeModule {
    constructor(private injector: Injector) {
        ServiceLocator.injector = injector;
    }
}

export class ServiceLocator {
    static injector: Injector;

    static get SnDialogService(): SnDialogService {
        return ServiceLocator.injector.get(SnDialogService);
    }
}
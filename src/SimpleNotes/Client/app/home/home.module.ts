import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DialogModule } from 'app/dialogs/dialog.module';

import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { NoteComponent } from 'app/note/note.component';
import { DemoComponent } from 'app/demo/demo.component';

import { homeRouting } from 'app/home/home.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,

        DialogModule,

        homeRouting
    ],
    declarations: [
        HomeComponent, AboutComponent, NoteComponent, DemoComponent
    ],
    exports: [
        HomeComponent, AboutComponent, NoteComponent, DemoComponent
    ]
})
export class HomeModule {
}
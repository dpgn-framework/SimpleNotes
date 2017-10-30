import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';
//import { Router, RouterModule } from '@angular/router';
//import { HttpModule } from '@angular/http';

import { LoginComponent } from 'app/login/login.component';

@NgModule({
    imports: [
        /*CommonModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule*/
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }
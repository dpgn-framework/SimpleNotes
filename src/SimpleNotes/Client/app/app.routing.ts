import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routing = RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
]);

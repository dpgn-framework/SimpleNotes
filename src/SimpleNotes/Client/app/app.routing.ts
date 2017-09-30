import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from 'app/notfound.component';
import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';

export const routing: ModuleWithProviders  = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    {
        path: 'home', loadChildren: 'app/home/home.module#HomeModule'
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
]);


//https://stackoverflow.com/questions/43392470/angular-2-sub-apps-parent-child-nested-components-nested-router-outlet-desig
//http://onehungrymind.com/named-router-outlets-in-angular-2/
//https://stackoverflow.com/questions/39112891/angular-2-rc5-router-outlet-inside-another-router-outlet
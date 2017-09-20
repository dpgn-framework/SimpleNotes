import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
//import "rxjs/Rx";

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from "./app.component";
import { NotFoundComponent } from './notfound.component';

import { routing } from './app.routing';

@NgModule({
    // directives, components, and pipes
    declarations: [AppComponent, NotFoundComponent
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,

        LoginModule,
        HomeModule,

        routing
    ],
    // providers
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
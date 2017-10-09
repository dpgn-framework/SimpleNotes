import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
//import { RouterModule } from '@angular/router';
//import { HttpModule } from "@angular/http";
//import "rxjs/Rx";

import { LoginModule } from 'app/login/login.module';

import { AppComponent } from "app/app.component";
import { NotFoundComponent } from 'app/notfound.component';

import { routing } from 'app/app.routing';

@NgModule({
    // directives, components, and pipes
    declarations: [AppComponent, NotFoundComponent
    ],
    // modules
    imports: [
        CommonModule,
        BrowserModule,
        //RouterModule,
        //HttpModule,
        
        LoginModule,

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
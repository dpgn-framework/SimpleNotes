﻿import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {
    constructor(private router: Router) { }

    gotoNote() {
        this.router.navigate(['/home/note']);
    }

    gotoAbout()
    {
        this.router.navigate(['/home/about']);
    }
}
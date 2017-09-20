import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "login",
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router) { }

    login() {
        this.router.navigateByUrl('home');
    }
}